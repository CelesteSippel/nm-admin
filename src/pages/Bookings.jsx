import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import SideNav from '../Components/SideNav'
const Bookings = () => {
  const [bookingData, setBookingData] = useState([])

  const getBookingData = async () => {
    const resp = await axios.get(
      'https://new-mood-api.herokuapp.com/api/Booking'
    )
    console.log(resp.data)
    setBookingData(resp.data)
  }

  console.log(bookingData)

  useEffect(() => {
    getBookingData()
  }, [])

  return (
    <>
      <Header />
      <SideNav />
      <div>
        <h1 className="booking-title">Bookings</h1>
        <main className="booking-database">
          {bookingData.map((booking, i) => {
            return (
              <section className="booking-card">
                <ul className="booking-info">
                  <li className="booking-details">{booking.contactName}</li>
                  <li className="booking-details">{booking.email}</li>
                  <li className="booking-details">{booking.eventDate}</li>
                  <li className="booking-details">{booking.eventLocation}</li>
                  <li className="booking-details">{booking.eventDetails}</li>
                </ul>
              </section>
            )
          })}
        </main>
      </div>
    </>
  )
}

export default Bookings

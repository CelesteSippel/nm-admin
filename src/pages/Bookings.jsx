import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Bookings = () => {
  const [bookingData, setBookingData] = useState([])

  const getBookingData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Booking')
    console.log(resp.data)
    setBookingData(resp.data)
  }

  console.log(bookingData)

  useEffect(() => {
    getBookingData()
  }, [])

  return (
    <>
      <div>
        <h1 className="booking-title">Bookings</h1>
        <main className="booking-database">
          {bookingData.map((booking, i) => {
            return (
              <Link
                to={{
                  pathname: `/${booking.id}`,
                  state: { booking },
                }}
              >
                {' '}
                <section className="booking-card" key={i}>
                  <section className="booking-info">
                    <h2 className="contact-name">{booking.contactName}</h2>
                    <h3 className="contact-email">{booking.email}</h3>
                    <h3 className="event-date">{booking.eventDate}</h3>
                  </section>
                </section>
              </Link>
            )
          })}
        </main>
      </div>
    </>
  )
}

export default Bookings

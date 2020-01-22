import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Header from '../Components/Header'
import SideNav from '../Components/SideNav'

const AddShow = () => {
  // const [resetForm, setResetForm] = useState(false)
  const [dateOfEvent, setDateOfEvent] = useState('')
  const [eventName, setEventName] = useState('')
  const [venues, setVenues] = useState([])
  const [venueId, setVenueId] = useState()
  const [showId, setShowId] = useState()
  const [shows, setShows] = useState([])

  const submitData = async event => {
    event.preventDefault()

    const resp = await axios.post('https://localhost:5001/api/Show', {
      dateOfEvent: dateOfEvent,
      eventName: eventName,
      venueId: parseInt(venueId),
    })
    console.log(resp.data)
    // setResetForm(true)
    setEventName('')
    setDateOfEvent('')
    setVenueId()
  }

  const getVenueData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Venue')
    console.log(resp.data)
    setVenues(resp.data)
  }

  useEffect(() => {
    getVenueData()
  }, [])

  const getShowData = async showId => {
    const resp = await axios.get('https://localhost:5001/api/Show/')
    console.log(resp.data)
    setShows(resp.data)
  }
  const deleteData = async () => {
    const resp = await axios.delete('https://localhost:5001/api/Show/' + showId)
    console.log(resp.data)
    setShows(prev => {
      console.log([...prev].filter(f => f.id !== showId))
      return [...prev].filter(f => f.id !== parseInt(showId))
    })
  }

  useEffect(() => {
    getShowData()
  }, [])

  return (
    <>
      <Header />
      <SideNav />
      <div className="lower-section">
        <h1 className="form">Add Show</h1>
        <div className="form-section">
          {/* {resetForm && <Redirect to="/" />} */}
          <form
            onSubmit={e => {
              submitData(e)
              alert('Show Added')
            }}
            className="add-show-form"
          >
            <div className="form-style">
              <label htmlFor="date-of-event">Date of Show:</label>
              <input
                onChange={e => {
                  setDateOfEvent(e.target.value)
                }}
                value={dateOfEvent}
                type="datetime-local"
              />
            </div>
            <div className="form-style">
              <label htmlFor="event-name">Event Title:</label>
              <input
                onChange={e => {
                  setEventName(e.target.value)
                }}
                value={eventName}
                type="text"
              />
            </div>
            <div className="form-style">
              <label htmlFor="drop-down">Venue:</label>
              <select
                className="option"
                onChange={e => {
                  setVenueId(e.target.value)
                }}
                type="dropdown"
              >
                <option>select a venue</option>
                {venues.map(venue => {
                  return <option value={venue.id}>{venue.venueName}</option>
                })}
              </select>
            </div>

            <div>
              <span>
                <input type="submit" value="Submit" className="form-button" />
              </span>
            </div>
          </form>
        </div>
        <h1 className="form">Delete Show</h1>
        <div className="form-section">
          <form
            onSubmit={e => {
              e.preventDefault()
              deleteData(e)
              alert('Show Deleted')
            }}
            className="add-show-form"
          >
            <div className="form-hates-me">
              <label htmlFor="drop-down">Show:</label>
              <select
                className="option"
                onChange={e => {
                  setShowId(e.target.value)
                }}
                type="dropdown"
              >
                <option>select a show</option>
                {shows.map(show => {
                  return <option value={show.id}>{show.eventName}</option>
                })}
              </select>
            </div>
            <div>
              <span>
                <input type="submit" value="Submit" className="form-button" />
              </span>
            </div>
          </form>
        </div>

        <footer>Made with 💛 Celeste Sippel</footer>
      </div>
    </>
  )
}

export default AddShow

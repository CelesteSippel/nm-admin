import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const AddShow = () => {
  const [resetForm, setResetForm] = useState(false)
  const [dateOfEvent, setDateOfEvent] = useState('')
  const [eventName, setEventName] = useState('')
  const [venues, setVenues] = useState([])
  const [venueId, setVenueId] = useState()

  const submitData = async event => {
    event.preventDefault()

    const resp = await axios.post('https://localhost:5001/api/Show', {
      dateOfEvent: dateOfEvent,
      eventName: eventName,
      venueId: parseInt(venueId),
    })
    console.log(resp.data)
    setResetForm(true)
  }

  const getVenueData = async () => {
    const resp = await axios.get('https://localhost:5001/api/Venue')
    console.log(resp.data)
    setVenues(resp.data)
  }

  useEffect(() => {
    getVenueData()
  }, [])

  return (
    <div className="lower-section">
      <h1 className="form">Add Show to User Website</h1>
      <main className="form-section">
        {resetForm && <Redirect to="/" />}
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
          <div>
            <label htmlFor="drop-down">Venue:</label>
            <select
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

          <div className="button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
      <footer>Made with 💛 Celeste Sippel</footer>
    </div>
  )
}

export default AddShow

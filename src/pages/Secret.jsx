import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SideNav from '../Components/SideNav'
import Header from '../Components/Header'

const Secret = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsAuthenticated(false)
    }
  }, [])

  return (
    <>
      {isAuthenticated ? (
        <div>
          <Header />
          <SideNav />
          <div>
            <div className="homeContainer">
              <section className="home-buttons">
                <Link to="/Shows">
                  <button className="admin-button">Shows</button>
                </Link>
                <Link to="/EmailList">
                  <button className="admin-button">Emails</button>
                </Link>
                <Link to="/Bookings">
                  <button className="admin-button">Bookings</button>
                </Link>
              </section>
            </div>
            <footer>Made with 💛 Celeste Sippel</footer>
          </div>
        </div>
      ) : (
        <Redirect to="/unauth" />
      )}
    </>
  )
}
export default Secret

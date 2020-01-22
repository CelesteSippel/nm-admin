import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from '../Components/SideNav'
import Header from '../Components/Header'
const HomePage = () => {
  return (
    <>
      <Header />
      <SideNav />
      <div>
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
        <footer>Made with 💛 Celeste Sippel</footer>
      </div>
    </>
  )
}

export default HomePage

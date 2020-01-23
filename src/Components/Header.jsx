import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navigation">
        <header>
          <Link to="/secret/:username" className="name">
            New Mood
          </Link>
        </header>
        <ul className="sub-nav">
          <li>
            <Link to="/shows" className="nav-details">
              Shows
            </Link>
          </li>
          <li>
            <Link to="/emailList" className="nav-details">
              Email
            </Link>
          </li>

          <li>
            <Link to="/bookings" className="nav-details">
              Bookings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header

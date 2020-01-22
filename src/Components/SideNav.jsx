import React from 'react'
import { Link } from 'react-router-dom'
const SideNav = () => {
  return (
    <div>
      <input
        type="checkbox"
        class="openSidebarMenu"
        id="openSidebarMenu"
      ></input>
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>

      <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
          <li>
            <Link to="/Music" className="side-nav-details">
              Music
            </Link>
          </li>
          <li>
            <Link to="/Shows" className="side-nav-details">
              Shows
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="side-nav-details">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideNav

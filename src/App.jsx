import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Secret from './pages/Secret'
import Unauthorized from './pages/Unauthorized'
import Shows from './pages/Shows'
import EmailList from './pages/EmailList'
import Bookings from './pages/Bookings'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Test for Admin</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Go Home</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/shows">Shows</NavLink>
            </li>
            <li>
              <NavLink to="/emailList">Email List</NavLink>
            </li>
            <li>
              <NavLink to="/bookings">Bookings</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/secret/:username" component={Secret}></Route>
        <Route exact path="/unauthorized" component={Unauthorized}></Route>
        <Route exact path="/shows" component={Shows}></Route>
        <Route exact path="/emailList" component={EmailList}></Route>
        <Route exact path="/bookings" component={Bookings}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App

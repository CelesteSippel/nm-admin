import React from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Link,
} from 'react-router-dom'

import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import SignUp from './pages/SignUp'
import Secret from './pages/Secret'
import Unauthorized from './pages/Unauthorized'
import Shows from './pages/Shows'
import EmailList from './pages/EmailList'
import Bookings from './pages/Bookings'
import Landing from './pages/Landing'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route exact path="/homepage" component={HomePage}></Route>
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

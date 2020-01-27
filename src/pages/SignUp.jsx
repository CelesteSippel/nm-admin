import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    fullname: '',
    password: '',
    email: '',
  })

  const setUserName = e => {
    setUserName(e.target.value)
  }

  const updateUser = e => {
    e.persist()
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submitForm = async e => {
    e.preventDefault()
    const resp = await axios.post(
      'https://new-mood-api.herokuapp.com/auth/signup',
      user
    )
    console.log(resp.data)
    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('expiresAt', resp.data.expirationTime)
  }

  return (
    <>
      <header className="new-account">Create a new Account!</header>
      <div className="sign-form-section">
        <form onSubmit={submitForm} className="inputs">
          <input
            type="text"
            placeholder="username"
            required
            value={user.username}
            onChange={updateUser}
            className="user-name"
          />
          <input
            type="text"
            placeholder="full name"
            onChange={updateUser}
            className="user-name"
          />
          <input
            type="email"
            placeholder="email"
            onChange={updateUser}
            className="user-name"
          />
          <input
            type="password"
            placeholder="password"
            required
            onChange={updateUser}
            className="user-name"
          />
          <button className="sign-button">Create Account</button>
        </form>
        <Link to="/">
          <button className="log-link">Login</button>
        </Link>
      </div>
    </>
  )
}

export default SignUp

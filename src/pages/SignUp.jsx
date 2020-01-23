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
    const resp = await axios.post('https://localhost:5001/auth/signup', user)
    console.log(resp.data)
    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('expiresAt', resp.data.expirationTime)
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <header>Create a new Account!</header>
        <input
          type="text"
          placeholder="username"
          required
          value={user.username}
          onChange={updateUser}
          name="username"
        />
        <input
          type="text"
          placeholder="full name"
          onChange={updateUser}
          name="fullname"
        />
        <input
          type="email"
          placeholder="email"
          onChange={updateUser}
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={updateUser}
          name="password"
        />
        <button className="button">Create account</button>
      </form>
      <Link to="/">
        <button className="">Login</button>
      </Link>
    </div>
  )
}

export default SignUp

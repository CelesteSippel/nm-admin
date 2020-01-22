import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [successfullyCreated, setSuccessfullyCreated] = useState(false)
  const [usernameFromApi, setUsernameFromApi] = useState('')
  const [user, setUser] = useState({
    username: '',
    password: '',
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
    const resp = await axios.post('https://localhost:5001/auth/login', user)
    console.log(resp.data)
    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('expiresAt', resp.data.expirationTime)
    // redirect to the secret
    if (resp.status === 200) {
      setUsernameFromApi(resp.data.username)
    }
  }

  useEffect(() => {
    if (usernameFromApi) {
      setSuccessfullyCreated(true)
    }
  }, [usernameFromApi])

  return (
    <>
      {successfullyCreated ? (
        <Redirect to={`/secret/${usernameFromApi}`} />
      ) : (
        <div>
          <header className="welcome">Welcome back!</header>
          <form onSubmit={submitForm}>
            <section className="login-form">
              <input
                type="text"
                placeholder="username"
                required
                value={user.username}
                onChange={updateUser}
                name="username"
              />
              <input
                type="password"
                placeholder="password"
                required
                onChange={updateUser}
                name="password"
              />
              <button className="button">Log in</button>
            </section>
          </form>
        </div>
      )}
    </>
  )
}
export default Login

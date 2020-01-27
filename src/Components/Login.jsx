import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
    const resp = await axios.post(
      'https://new-mood-api.herokuapp.com/auth/login',
      user
    )
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
          <header className="new-account">Welcome back!</header>
          <section className="login-form">
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
                type="password"
                placeholder="password"
                required
                onChange={updateUser}
                className="user-name"
              />
              <button className="sign-button">Log in</button>

              <Link to="/signup">
                <button className="log-link">Sign Up</button>
              </Link>
            </form>
          </section>
        </div>
      )}
    </>
  )
}
export default Login

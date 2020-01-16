import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

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
        <div>This is only for users</div>
      ) : (
        <Redirect to="/unauth" />
      )}
    </>
  )
}
export default Secret

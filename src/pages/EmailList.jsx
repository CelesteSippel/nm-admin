import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SideNav from '../Components/SideNav'
import Header from '../Components/Header'

const EmailList = () => {
  const [emailLists, setEmailLists] = useState([])

  const getEmailListData = async () => {
    const resp = await axios.get(
      'https://new-mood-api.herokuapp.com/api/EmailList'
    )
    console.log(resp.data)
    setEmailLists(resp.data)
  }

  useEffect(() => {
    getEmailListData()
  }, [])

  return (
    <>
      <Header />
      <SideNav />
      <div className="email-lower-section">
        <h2 className="email">Email List</h2>
        <div className="email-container">
          <section className="email-list-info">
            <div>
              {emailLists.map(emailList => {
                return (
                  <ul>
                    <li className="email-detail email-truncate email-ul">
                      {emailList.email}
                    </li>
                  </ul>
                )
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default EmailList

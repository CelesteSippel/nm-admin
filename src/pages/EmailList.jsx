import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SideNav from '../Components/SideNav'
import Header from '../Components/Header'

const EmailList = () => {
  const [emailLists, setEmailLists] = useState([])

  const getEmailListData = async () => {
    const resp = await axios.get('https://localhost:5001/api/EmailList')
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
      <div>
        <h2>Email List</h2>
        <section>
          <div className="email-list-info">
            {emailLists.map(emailList => {
              return (
                <ul className="email-box">
                  <li className="email-detail">{emailList.email}</li>
                </ul>
              )
            })}
          </div>
        </section>
        <footer>Made with 💛 Celeste Sippel</footer>
      </div>
    </>
  )
}

export default EmailList

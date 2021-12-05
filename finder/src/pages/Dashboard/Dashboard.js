import React, { useState } from 'react'
import AdminPanel from './SidePanel'
import { FaSearch } from 'react-icons/fa'
import './Dashboard.css'

function App() {
  return (
    <main>
      <div className='dashboard'>
        <AdminPanel />
        <Finder />
      </div>
    </main>
  )
}
const Finder = () => {
  const [id_phone, setId_phone] = useState('')
  const searchAccount = (e) => {
    e.preventDefault()
  }
  return (
    <div className='finder'>
      <h1>
        <FaSearch className='sc' /> Search Linked Accounts
      </h1>
      <div className='search'>
        <form
          className='search-bar'
          onSubmit={searchAccount}
          autoComplete='off'
        >
          <input
            type='search'
            id='search-box'
            name='search-box'
            value={id_phone}
            placeholder='Enter email-id or phone no.'
            onChange={(e) => setId_phone(e.target.value)}
          />
        </form>
      </div>
      <div className='title'>
        <h1>Related Results</h1>
        <div className='underline'></div>
      </div>
      <article className='results'></article>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import { RiLogoutBoxLine } from 'react-icons/ri'

const SidePanel = () => {
  return (
    <section className='admin-panel'>
      <div className='profile'>
        <img
          className='profile-pic'
          src='https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg'
          alt='detective'
        />
        <article>
          <h3>Rosy Fernando</h3>
          <p>Chief Detective</p>
        </article>
      </div>
      <Icons />
    </section>
  )
}

const Icons = () => {
  return (
    <div className='icons'>
      <div className='icon'>
        <MdDashboard className='ic' />
        <p>Dashboard</p>
      </div>
      <div className='icon'>
        <RiLogoutBoxLine className='ic' />
        <p>Log out</p>
      </div>
    </div>
  )
}

export default SidePanel

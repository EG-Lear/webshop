import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNavBar = () => {

  return (
    <div>
      <NavLink className='App-link' to='/adminPage'>Main</NavLink>
      <NavLink className='App-link' to='/discounts'>Discounts</NavLink>
      <NavLink className='App-link' to='/inventory'>Inventory</NavLink>
      nav
    </div>
  )
}

export default AdminNavBar
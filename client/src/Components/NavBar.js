import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <NavLink className='App-link' to='/'>Home</NavLink>
      <NavLink className='App-link' to='/cart'>Cart</NavLink>
    </div>
  )
}

export default NavBar
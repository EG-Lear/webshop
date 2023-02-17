import React from 'react'
import { Link } from 'react-router-dom'

const AdminPage = () => {
  
  return(
    <div>
      admin viewer
      <br/>
      <Link to='/'>
        <button>To Main Page</button>
      </Link>
    </div>
  )
}

export default AdminPage
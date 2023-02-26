import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 
import { Link } from 'react-router-dom'

const AdminPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      console.log(data.admin)
      if (data.admin === true) {

      } else {
        navigate('/')
        alert("I've got my eye on you")
      }
    })
  }, [])

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
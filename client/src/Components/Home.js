import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Containers/Login'
import NavBar from './NavBar'

const Home = ({loggedIn, logInUser, logOutUser}) => {

  const handleButton = () => {
    logOutUser()
  }
  
  if (loggedIn === false) {
    return (
      <div>
        <Login logInUser={logInUser} />
        <Link to='/registration'>
          <button>Register</button>
        </Link>
      </div>
    )
  } else if (loggedIn === true) {
    return (
      <div>
        <NavBar />
        <br/>
        Welcome to E-Com 2000 where we satisfy your e-commerce needs.
        <br/>
        <button onClick={handleButton}>Log Out</button>
      </div>
    )
  }
}

export default Home
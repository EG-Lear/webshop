import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../Containers/Login'

const Home = ({loggedIn, logInUser, logOutUser}) => {

  const handleButton = () => {
    logOutUser()
  }
  
  if (loggedIn === false) {
    return (
      <div>
       <Login logInUser={logInUser} />
      </div>
    )
  }else if (loggedIn === true) {
    return(
      <div>
        Welcome Home Darling!
        <br/>
        <button onClick={handleButton}>Log Out</button>
      </div>
    )
  }
}

export default Home
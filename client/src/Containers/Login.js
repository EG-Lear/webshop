import React from 'react'

const Login = ({logInUser}) => {

  const handleButton = () => {
    logInUser()
  }

  return (
    <div>
      please log in
      <br/>
      <button onClick={handleButton}>Log In</button>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = ({loginUser}) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  
  const handleChange = (event) => {
    if (event.target.id === 'U') {
      setUserName(event.target.value)
    } else if (event.target.id === 'P') {
      setPassword(event.target.value)
    } else if (event.target.id === 'PC') {
      setPasswordConfirmation(event.target.value)
    }
  }

  return (
    <div>
      <form>
        Please enter the desired username
        <br/>
        <label>Username: </label>
        <input id='U' value={userName} onChange={handleChange}></input>
        <br/>
        <br/>
        Please create a password
        <br/>
        <label>Password: </label>
        <input id='P' value={password} onChange={handleChange}></input>
        <br/>
        Confirm your password
        <br/>
        <label>Password: </label>
        <input id='PC' value={passwordConfirmation} onChange={handleChange}></input>
      </form>
      <br/>
      cancel registration
      <br/>
      <Link to='/'>
        <button>cancel</button>
      </Link>
    </div>
  )
}

export default Registration
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = ({logInUser}) => {
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

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password === passwordConfirmation) {
      alert("Profile being created")
      fetch('/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: userName, 
          password: password,
          password_confirmation: passwordConfirmation
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors)
        } else {
          logInUser(data.username)
        }
      })
    } else {
      alert("Passwords do not match")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Please enter the desired username
        <br/>
        <label>Username: </label>
        <input id='U' value={userName} onChange={handleChange}></input>
        <br/>
        <br/>
        Please create a password
        <br/>
        <label>Password: </label>
        <input id='P' type='password' value={password} onChange={handleChange}></input>
        <br/>
        Confirm your password
        <br/>
        <label>Password: </label>
        <input id='PC' type='password' value={passwordConfirmation} onChange={handleChange}></input>
        <br/>
        <br/>
        <button>Register</button>
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
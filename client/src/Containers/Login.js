import React, { useState, useEffect } from 'react'

const Login = ({logInUser}) => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleChange = (event) => { //handles input fields
    if (event.target.id === 'U') {
      setUserName(event.target.value)
    } else if (event.target.id === 'P') {
      setPassword(event.target.value)
    }
  }

  const handleSubmit = (event) => { //handles login submit
    event.preventDefault()
    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: userName, 
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.errors) {
        console.log(data)
        alert(data.errors)
      } else {
        console.log("woof")
        console.log(data)
        logInUser(data.username, data)
        console.log("rawr")
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input id='U' value={userName} onChange={handleChange}></input>
        <br/>
        <label>Password: </label>
        <input id='P' type='password' value={password} onChange={handleChange}></input>
        <br/>
        <br/>
        <button>Login In</button>
      </form>
    </div>
  )
}

export default Login
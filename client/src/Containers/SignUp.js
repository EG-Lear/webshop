import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = ({loginUser}) => {

  return (
    <div>
      <form>
        Please enter the desired username
        <br/>
        <label>Username: </label>
        <input></input>
        <br/>
        <br/>
        Please create a password
        <br/>
        <label>Password: </label>
        <input></input>
        <br/>
        Confirm your password
        <br/>
        <label>Password: </label>
        <input></input>
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

export default SignUp 
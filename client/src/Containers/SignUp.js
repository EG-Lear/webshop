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
      </form>
    </div>
  )
}

export default SignUp 
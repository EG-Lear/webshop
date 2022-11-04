import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Cart from './Containers/Cart'

function App () {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()


  const logInUser = () => {
    setLoggedIn(true)
    navigate('/')
  }

  const logOutUser = () => {
    setLoggedIn(false)
    navigate('/')
  }

  return (
    <div>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home loggedIn={loggedIn} logInUser={logInUser} logOutUser={logOutUser}/>} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

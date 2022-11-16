import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './Components/Home'
import Cart from './Containers/Cart'

function App () {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")
  const navigate = useNavigate()


  const logInUser = (u, a) => {
    setLoggedIn(true)
    setUser(u)
    console.log("moo")
    console.log(a.username)
    console.log('baaaa')
    navigate('/')
  }

  const logOutUser = () => {
    console.log("in logout")
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(() => {
      setLoggedIn(false)
      setUser(null)
    })
    navigate('/')
  }

  useEffect(() => {
    fetch('/me')
    .then(res => {
      if (res.status === 401) {
        navigate('/')
        alert("please log in")
      }
      if (res.ok) {
        res.json()
        .then(u => {
          if (u.errors) {
            alert(u.errors)
          } else {
            setLoggedIn(true)
            setUser(u.username) 
          }
        })
      }
    })
    
  }, [])

  return (
    <div>    
      <Routes>
        <Route exact path='/' element={<Home loggedIn={loggedIn} logInUser={logInUser} logOutUser={logOutUser}/>} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App;

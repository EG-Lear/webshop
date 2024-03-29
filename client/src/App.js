import {BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './App.css'
import Registration from './Containers/Registration'
import Home from './Components/Home'
import Cart from './Containers/Cart'
import Electronics from './Containers/Electronics'
import Miscellaneous from './Containers/Miscellaneous'
import Clothing from './Containers/Clothing'
import Entertainment from './Containers/Entertainment'
import AdminPage from './Components/AdminPage'
import Discounts from './Containers/Discounts'
import Inventory from './Containers/Inventory'

function App () {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")
  const navigate = useNavigate()


  const logInUser = (u, a) => {
    setLoggedIn(true)
    setUser(u)
    console.log(a.username)
    console.log('baaaa')
    // navigate('/')
    // console.log(a.admin)
    if (a.admin === true) {
      console.log('truey')
      navigate('/adminPage')
    } else {
      navigate('/')
    }
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
        <Route exact path='/adminPage' element={<AdminPage />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/clothing' element={<Clothing />} />
        <Route exact path='/discounts' element={<Discounts />} />
        <Route exact path='/electronics' element={<Electronics />} />
        <Route exact path='/entertainment' element={<Entertainment />} />
        <Route exact path='/inventory' element={<Inventory/>} />
        <Route exact path='/registration' element={<Registration logInUser={logInUser}/>} />
        <Route exact path='/miscellaneous' element={<Miscellaneous />} />
      </Routes>
    </div>
  )
}

export default App;

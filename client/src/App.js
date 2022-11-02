import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Cart from './Containers/Cart'

function App () {
  return (
    <div>
      <Router>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

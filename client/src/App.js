import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'

function App () {
  return (
    <div>
      <Router>
      <NavBar/>
        <Routes>
          <Route Path='/' Render={() => <Home />} />
        </Routes>
      </Router>
      Hello World
      <br/>
      <label>make an entry: </label>
      <input></input>
    </div>
  )
}

export default App;

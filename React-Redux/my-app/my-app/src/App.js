import React from 'react'
import './App.css'
import Login from './auth/Login'
import Register from './auth/Register'
import Navbar from './Navbar'
import Shop from './Shop'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Shop />
        <Login />
        <Register />
      </div>
    </>
  )
}

export default App


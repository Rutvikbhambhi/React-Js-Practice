import React from 'react'
import './App.css'
import Login from './auth/Login'
import Register from './auth/Register'
import Navbar from './Navbar'
import Shop from './Shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <div className="container"> */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Shop /> */}
        {/* <Login /> */}
        {/* <Register /> */}
      </Routes>
    </BrowserRouter>
      {/* </div> */}
    </>
  )
}

export default App


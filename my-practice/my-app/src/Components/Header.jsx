import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'

// import Footer from './Footer'
// import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className='header' style={{ display: "flex", justifyContent: "space-evenly" }}>
      {/* <h1>Use Effect</h1> */}
      {/* <a href="/#" style={{ color: "red", textDecoration: "none" }}>
        <h1>Home</h1>
      </a> */}

      <Link to="/" style={{ color: "red", textDecoration: "none" }}>
        <h1>Home</h1>
      </Link>

      <Link to="./about" style={{ color: "red", textDecoration: "none" }}>
        <h1>About</h1>
      </Link>

      <Link to="./contact" style={{ color: "red", textDecoration: "none" }}>
        <h1>Contact</h1>
      </Link>

      {/* <a href="about" style={{ color: "red", textDecoration: "none" }}>
        <h1>About</h1>
      </a>

      <a href="contact" style={{ color: "red", textDecoration: "none" }}>
        <h1>Contact</h1>
      </a> */}

      {/* <Footer /> */}
    </div>
  )
}

export default Header
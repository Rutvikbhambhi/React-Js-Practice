import React from 'react'
import { Link } from 'react-router-dom';


const Contact = () => {

  const Submit = () => {
    console.log("login successfull");
  }

  return (
    <div className='form'>
      <div className='login'>
        <Link to="/" style={{ color: "red", textDecoration: "none" }}>
          <h1>Home</h1>
        </Link>
        <Link to="/about" style={{ color: "red", textDecoration: "none" }}>
          <h1>About</h1>
        </Link>
        <form>
          <input type="text" name='name' placeholder='Enter Your Name' />
          <br />
          <input type="name" name='name' placeholder='Enter Your LastName' />
          <br />
          <input type="email" name='email' placeholder='Enter Your Email' />
          <br />
          <input type="number" name='number' placeholder='Enter Your Number' />
          <br />
          <button onClick={Submit}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
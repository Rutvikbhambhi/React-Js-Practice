import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()

  const registerHandel = (e) => {
    e.preventDefault()
    console.table(name, setname, password)
  }
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h2>Register</h2>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setname(e.target.value)} />
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
        <button onClick={registerHandel} className='mt-3'>Register</button>
        <span>Already have account ? </span>
        <Link to={"/login"}>Log In</Link>

      </div>
    </div>
  )
}

export default Register
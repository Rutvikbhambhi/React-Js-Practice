import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import singInUser, { logout } from '../redux/authSlice';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  const handleLogin = () => {
    console.log(email, password)
    dispatch(singInUser({ email, password }))
  }

  const logouthandle = () => {
    dispatch(logout)
  }

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h2>Login System</h2>
        <label htmlFor="">Email</label>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
        <button onClick={handleLogin} className='mt-3'>Login</button>
        <button onClick={logouthandle} className='mt-3'>Logout</button>
        <span>Do not have account ?</span>
        <Link to={"/"}>Sign up</Link>
      </div>
    </div>
  )
}

export default Login
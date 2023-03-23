import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const registerHandel = ()=>{
    console.table(name,setname,password)
  }
  return (
    <div>
        <div class="d-flex flex-column align-items-center">
          <h2>Register</h2>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)} />
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} />
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} />
          <button onClick={registerHandel} className='mt-3'>Register</button>
        </div>
    </div>
  )
}

export default Register
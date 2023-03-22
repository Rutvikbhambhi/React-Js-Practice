import React, { useState } from 'react'

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
        <div class="d-flex flex-column align-items-center">
          <h2>Register</h2>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Name' />
          <label htmlFor="">Email</label>
          <input type="email" placeholder='Email' />
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Password' />
          <button className='mt-3'>Register</button>
        </div>
    </div>
  )
}

export default Register
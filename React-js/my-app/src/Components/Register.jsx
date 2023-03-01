import React, { Component } from 'react'

export default function Register (props) {
    let btnStyle;
    btnStyle = {
        backgroundColor: "green",
        color: "white"
    };
    return (
      <div className='container card p-5 mt-2 register-container'>
        <h1 className='text-center'>Registation From</h1>
        <form onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' required className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' required className='form-control' />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password:</label>
                <input type="password" name='password' required className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary m-2'>Register</button>
            <button type='button' className='btn' style={btnStyle}>Show Password</button>
        </form>
      </div>
    )
  }



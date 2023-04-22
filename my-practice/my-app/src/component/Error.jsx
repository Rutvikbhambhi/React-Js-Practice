import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()

  return (
    <>
      <div>404 page not Found</div>
      <button onClick={() => Navigate('-1')}>Go Back</button>
    </>
  )
}

export default Error

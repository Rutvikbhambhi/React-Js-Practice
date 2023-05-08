import React from 'react'
import Comp from './Comp'

const Student = ({props}) => {
  return (
    <>
        {/* <h1>{props.name}</h1>
        <h2>{props.age}</h2> */}

        <Comp />
    </>
  )
}

// Student.prototype = {
//   name: prototype.string,
//   age: prototype.number
// }

// Student.defaultProps = {
//   name: "Name",
//   age: 0
// }

export default Student
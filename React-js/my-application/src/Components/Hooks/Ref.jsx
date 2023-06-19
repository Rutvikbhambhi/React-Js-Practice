import React, { useContext } from 'react';
import {firstName} from './Context';

function Ref() {
  const firstName = useContext(firstName)
  return (
    <div>
        <h1>{firstName}</h1> 
    </div>
  )
}

export default Ref
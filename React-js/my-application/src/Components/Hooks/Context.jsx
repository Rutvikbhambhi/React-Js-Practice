import React, { createContext } from 'react'
import Pure from './Pure'
const FirstName = createContext()
function Context() {
  return (
    <div>
        <FirstName.Provider value='Rutvik'>
            <Pure />
        </FirstName.Provider>
    </div>  
  )
}

export default Context
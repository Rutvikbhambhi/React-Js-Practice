import React, { useState } from 'react'

function Memo() {
    const [countone, setCountone] = useState(0)
    const [counttwo, setCounttwo] = useState(0)
    function increment() {
        setCountone(countone + 1)
    }
    function decrement() {
        setCounttwo(counttwo - 1)
    }
    const isEven = () => {
        for(let i=0; i<10000000000000000; i++){
            return countone%2===0
        }
    }
    return (
        <div>
            <button onClick={increment}>Count One 0 {countone}</button>
                {isEven()?'Even':'Odd'}<br />
            <button onClick={decrement}>Count Two 0 {counttwo}</button>
        </div>
    )
}

export default Memo;
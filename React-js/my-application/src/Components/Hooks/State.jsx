import React, { useState } from 'react'

function State() {

    // const [login, setLogin] = useState(1)

    // const [count, setCount] = useState(0)
    const [state, setState] = useState({ count: 0, name: 'Increment' })
    const count = state.count
    const name = state.name

    function increment() {
        setState(prevState => {
            return { ...prevState, name: 'Increment', count: prevState.count + 1 }
        })
        // setCount(prevCount=>prevCount+1)
    }

    function decrement() {
        setState(prevState => {
            return { ...prevState, name: 'Decrement', count: prevState.count - 1 }
        })
        // setCount(count-1)
    }

    return (
        <div>
            {/* {login == 1 ?
                <h1>Rutvik</h1>
                : login == 2 ? <h1>User1</h1>
                : <h1>User2</h1>
            } */}
            <h1>{name}</h1>
            <br />
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>

        </div>
    )
}

export default State;
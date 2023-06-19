import React, { useReducer, useState } from 'react';
const initialState = {count: 0}
const reducer = (state, action) => {
    switch(action.type){
        case 'INC':
            return {count:state.count+1}
        case 'DEC':
            return {count:state.count-1}
        default:
            return state
    }
    // return state
}
function Reducer() {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <button onClick={() => dispatch({type: 'INC'})}>Inc</button>
            {state.count}
            <button onClick={() => dispatch({type: 'DEC'})}>Dec</button>
        </div>
    )
}

export default Reducer
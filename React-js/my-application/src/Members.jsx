import React, { useEffect, useState } from 'react'

function Members(props) {
    // const [data, setData] = useState("Rutvik")
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.warn("useEffect");
    })
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count+1)}>Update Data</button>
            <button onClick={() => setCount(count-1)}>Update Data</button>
            {/* <h1>{data}</h1>
            <button onClick={()=>setData("Taksh")}>Update Data</button> */}
            {/* <h1>Rutvik</h1>
            <button onClick={() => props.data}>Call data function</button> */}
        </div>
    )
}

export default Members
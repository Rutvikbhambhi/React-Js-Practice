import React, { useEffect, useState } from 'react'

function Members(props) {
    const [data, setData] = useState(10);
    const [count, setCount] = useState(100 );
    useEffect(() => {
        console.warn("called with data state");
    },[data]);

    useEffect(() => {
        alert("count is "+ count);
    },[count]);
    return (
        <div>
            <h2>Count : {count}</h2>
            <h2>Data : {data}</h2>
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setData(data + 1)}>Update Data</button>
            {/* <h2>{count}</h2> */ }
    {/* <button onClick={() => setCount(count + 1)}>Update Data</button> */ }
    {/* <button onClick={() => setCount(count - 1)}>Update Data</button> */ }
    {/* <h1>{data}</h1>
            <button onClick={()=>setData("Taksh")}>Update Data</button> */}
    {/* <h1>Rutvik</h1>
            <button onClick={() => props.data}>Call data function</button> */}
        </div >
    )
}

export default Members
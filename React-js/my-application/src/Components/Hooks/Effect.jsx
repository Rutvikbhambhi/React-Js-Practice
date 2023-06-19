import React, { useEffect, useState } from 'react'

function Effect() {
    const [content, setcontent] = useState('posts')
    const [count, setCount] = useState(0);
    const [item, setItem] = useState([])
    useEffect(() => {
        console.log('componentDidMount');
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/'+content)
        .then(response => response.json())
        .then(json => setItem(json))

        console.log('componentDidUpdate');
        return () => {
            console.log('Unmount');
        }
    }, [content]);

    // const [data, setData] = useState(10);
    // const [count, setCount] = useState(100);
    // useEffect(() => {
    //     console.warn("called with data state");
    // }, [data]);

    // useEffect(() => {
    //     alert("count is " + count);
    // }, [count]);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <button onClick={() => setcontent('posts')}>Posts</button>
            <button onClick={() => setcontent('users')}>Users</button>
            <button onClick={() => setcontent('comment')}>Comment</button>
            <h1>{content}</h1>
            <ul>
                {item && item.map(item => {
                    return <li key={item.id}>{item.id}</li>
                    // return <pre>{JSON.stringify(item)}</pre>
                })}
            </ul>
        </div>
        // <div>
        //     <h2>Count : {count}</h2>
        //     <h2>Data : {data}</h2>
        //     <button onClick={() => setCount(count + 1)}>Update Count</button>
        //     <button onClick={() => setData(data + 1)}>Update Data</button>
        //     <h2>{count}</h2>
        //     <button onClick={() => setCount(count + 1)}>Update Data</button>
        //     <button onClick={() => setCount(count - 1)}>Update Data</button>
        //     <h1>{data}</h1>
        //     <button onClick={() => setData("Taksh")}>Update Data</button>
        //     <h1>Rutvik</h1>
        //     <button onClick={() => props.data}>Call data function</button>
        // </div >
    )
}

export default Effect;
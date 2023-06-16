import React from 'react'

function Users(props) {
    // Lifting State Up
    const data={name:"Rutvik", email: 'rutvik@gmail.com'};


    // const [status, setStatus] = React.useState(false)    
    // function getData(val) {
    //     console.log(val);
    // }
    return (
        <div>
            {/* Lifting State Up */}
            <h2>User Name : {props.name}</h2>
            <button onClick={()=>props.alert(data)}>Click Me</button>

            {/* Reuse Component With List
            <span>{props.data.name}</span>
            <span>{props.data.email}</span>
            <span>{props.data.address}</span> */}


            {/* < button onClick={() => props.data}>Call data function</button>   */}
            {/* {
                status ? <h1>Rutvik</h1> : null
            } */}
            {/* <h1>{props.name}</h1> */}
            {/* <h1>{props.age}</h1>    
                <h1>{props.email}</h1>    
                <h1>{props.other.address}</h1>*/}

            {/* <button
                style={{
                    margin: "10px 10px",
                    padding: "10px 30px",
                    background: "palevioletred",
                    border: "none",
                    borderRadius: "5px"
                }}
                onClick={() => setStatus(true)}>
                Show
            </button>
            <button
                style={{
                    padding: "10px 30px",
                    background: "palevioletred",
                    border: "none",
                    borderRadius: "5px"
                }}
                onClick={() => setStatus(false)}>
                Hide
            </button> */}
        </div>
    )
}

export default Users;
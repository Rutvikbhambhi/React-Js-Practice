import React from 'react'

function Users(props) {
    const [status, setStatus] = React.useState(true)
    // function getData(val) {
    //     console.log(val);
    // }
    return (
        <div>
            {/* <h1>{props.name}</h1> */}
            {/* <h1>{props.age}</h1>    
                <h1>{props.email}</h1>    
                <h1>{props.other.address}</h1>*/}

            <button onClick={() => setStatus(true)}>Show</button>
            <button onClick={() => setStatus(false)}>Hide</button>
        </div>
    )
}

export default Users;
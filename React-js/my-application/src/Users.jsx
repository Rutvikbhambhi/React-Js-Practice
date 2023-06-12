import React from 'react'

function Users(props) {
    
    function getData(val) {
        console.log(val);
    }
    return (
        <>
            <div>
                {/* <h1>{props.name}</h1> */}
                {/* <h1>{props.age}</h1>    
                <h1>{props.email}</h1>    
                <h1>{props.other.address}</h1>*/}
            </div>
        </>
    )
}

export default Users;
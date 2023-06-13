import React, { useState } from 'react'

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [pass, setPass] = useState("");
    function loginHandle(e) {
        if (user.length<3 || password.length<3) {
            alert("type corrent value")
        } else {
            alert("all good")
        }
        e.preventDefault()
    }

    function userHandler(e) {
        let item = e.target.value;
        if (item.length<3) {
            setUserErr(true)
        } else {
            setUserErr(false)
        }
        setUser(item);
        // console.warn(e.target.value.length);
    }

    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length<3) {
            setPass(true)
        } else {
            setPass(false)
        }
        setPassword(item);
        // console.warn(e.target.value.length);
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder='Enter User Id' onChange={userHandler} />
                {userErr?<span style={{color: "red"}}>User Not Valid</span>:""}
                <br /><br />
                <input type="password" placeholder='Enter Password' onChange={passwordHandler} />
                {pass   ?<span style={{color: "red"}}>Password not valid</span>:""}
                <br /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;
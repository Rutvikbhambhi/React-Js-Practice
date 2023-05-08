import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {

    const [inpval, setInterval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value); 

        const { value, name } = e.target;
        // console.log(value,name);

        setInterval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("users");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            alert("email field is requred")
        } else if (!email.includes("@")) {
            alert("plz enter the valid email")
        } else if (password === "") {
            alert("password field is requred")
        } else if (password.length < 5) {
            alert("password length greater five")
        } else {
            if(getuserArr && getuserArr.length){
                const userdata = JSON.parse(getuserArr)
                console.log(userdata);
            }
        }
    }


    return (
        <div>
            <div className='form'>
                {/* <div className="contact">
                    <Link to="/" style={{ color: "red", textDecoration: "none" }}>
                        <h1>Home</h1>
                    </Link>
                    <Link to="/about" style={{ color: "red", textDecoration: "none" }}>
                        <h1>About</h1>
                    </Link>
                </div> */}
                <div className='login'>
                    <div className='input'>
                        <h2>Sign In</h2>
                        <form>
                            <input type="email" name='email' onChange={getdata} placeholder='Enter Your Email' />
                            <br />
                            <input type="password" name='password' onChange={getdata} placeholder='Enter Your password' />
                            <br />
                            <button onClick={addData}>Submit</button>
                        </form>
                        <p>Already Have an Account <span><NavLink to="/contact">Sign Up</NavLink></span></p>
                    </div>
                    <div className="img">
                        <img src="img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
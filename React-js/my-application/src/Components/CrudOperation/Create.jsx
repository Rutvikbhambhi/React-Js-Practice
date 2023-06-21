import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    const header = {"Access-Controll-Allow-Origin":"*"}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked");
        axios.post(
            'https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube',
            {
                name: name,
                email: email
            },
            header
        )
    }

    return (
        <div>
            <h2>Create</h2>
            <form className='text-dark'>
                <div className="mb-3 w-50 m-auto">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3 w-50 m-auto">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {name}
                {email}

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Create
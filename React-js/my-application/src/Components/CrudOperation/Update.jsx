import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Update() {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`, {
            name: name,
            email: email
        })
            .then(() => {
                navigate("/read")
            })
    }

    return (
        <div className='text-dark mt-5'>
            <h2>Update</h2>
            <form className='mt-5'>
                <div className="mb-3 w-50 m-auto">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3 w-50 m-auto">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary mx-2"
                    onClick={handleUpdate}>
                    Update
                </button>
                <Link to='/read'>
                    <button className="btn btn-secondary mx-2">Back</button>
                </Link>
            </form>
        </div>
    )
}

export default Update
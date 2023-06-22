import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {

    const [data, setData] = useState([]);

    function getData() {
        axios.get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            });
    }

    function handleDelete(id) {
        axios.delete(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`)
            .then(() => {
                getData()
            })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className='text-dark'>
            <h2>Read Operation</h2>
            <table className="table w-75 mt-5 m-auto">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <Link to='/update'>
                                                <button
                                                    className='btn btn-success'
                                                    onClick={() => setToLocalStorage(
                                                        eachData.id,
                                                        eachData.name,
                                                        eachData.email
                                                    )}>
                                                    Edit
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                className='btn btn-danger'
                                                onClick={() => handleDelete(eachData.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default Read
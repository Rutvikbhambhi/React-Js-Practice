import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {

    const [data, setData] = useState([]);
    const [tabledark, setTableDark] = useState('');

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
            <div className="d-flex justify-content-around mt-5">
                <div class="form-check form-switch">
                    <input
                        className="form-check-input mx-5"
                        type='checkbox'
                        onClick={() => {
                            if (tabledark === 'table-dark') setTableDark("")
                            // else setTableDark("table-dark");
                            else setTableDark("table-dark");
                        }}
                    />
                </div>
                <h2>Read Operation</h2>
                <Link to='/'>
                    <button className='btn btn-primary'>Create</button>
                </Link>
            </div>
            <table className={`table w-90 mt-5 m-auto ${tabledark}`}>
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
import React, { useEffect, useState } from 'react';

const Employee = () => {
    const [empdata, setEmpDataChange] = useState(null)
    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className='container'>
            <div className="card">
                <div className="card-title">
                    <h1>Employee List</h1>
                </div>
                <div className="card-body">
                    <table className='table table-bordered'>
                        <thead className='table-dark text-white'>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a className='btn btn-success'>Edit</a>
                                            <a className='btn btn-success'>Remove</a>
                                            <a className='btn btn-success'>Details</a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Employee

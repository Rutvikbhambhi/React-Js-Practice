import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Read() {

    const [data, setData] = useState([]);

    function getData() {
        axios.get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            });
    }

    useEffect(() => {
        getData();
    }, [data]);

    

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
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <button className='btn btn-success'>Edit</button>
                        </td>
                        <td>
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Read
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const userList = await axios.get('http://localhost:4000/users');
        setUsers([...userList.data]);
    }

    const deleteUser = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            await axios.delete(`http://localhost:4000/users/${id}`);
        }
    }

    useEffect(() => {
        getUsers();
    }, [users]);

    return (
        <div className="container">
            <table className="table mt-5">
                <thead className="primary_color text-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <td scope="col">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) =>
                        <tr key={user.id}>
                            <td>{index}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <Link className="btn btn primary_color text-light" exact to={`/users/${user.id}`}>View</Link>&nbsp;
                                <Link className="btn btn secondary-color text-light" exact to={`/users/edit/${user.id}`}>Edit </Link>&nbsp;
                                <button className="btn btn danger_color text-light" onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

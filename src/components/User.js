import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';

export const User = () => {
    const initialState = { name: '', username: '', email: '', phone: '', website: '' };
    const [user, setUserState] = useState(initialState);
    const { id } = useParams();

    const getUser = async () => {
        const userData = await Axios.get(`http://localhost:4000/users/${id}`);
        setUserState({...userData.data});
        console.log(user, id);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="container">
            <h2 className="text-center mt-2">User Data</h2>
            <div className="w-50 p-5 mx-auto mt-4 shadow-lg bg-light">
                <ul className="user-info-list">
                    <li>Name: {user.name}</li>
                    <li>Username: {user.username}</li>
                    <li>Email: {user.email}</li>
                    <li>Phone: {user.phone}</li>
                    <li>Website: {user.website}</li>
                </ul>
            </div>
        </div>
    )
}

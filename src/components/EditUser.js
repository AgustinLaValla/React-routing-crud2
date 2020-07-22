import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import Axios from 'axios';

export const EditUser = () => {

    const intialValue = { name: '', username: '', email: '', phone: '', website: '' };
    const [user, setUser] = useState(intialValue);
    const { id } = useParams();
    const history = useHistory();

    const getUser = async () => {
        const userData = await Axios.get(`http://localhost:4000/users/${id}`);
        setUser({ ...userData.data });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (id !== 'new_user') {
            await Axios.put(`http://localhost:4000/users/${id}`, user);
        } else {
            await Axios.post('http://localhost:4000/users', user);
        }
        history.push('/');
    }

    useEffect(() => {
        if (id !== 'new_user') {
            getUser();
        }
    }, [])

    return (
        <div className="container">
            <h1 className="text-center mt-2">{id !== 'new_user' ? 'Edit User' : 'Add User'}</h1>
            <div className="w-50 p-5 bg-light mx-auto shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter your name"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter your username"
                            name="username"
                            value={user.username}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="email"
                            className="form-control"
                            placeholder="Enter your Email"
                            name="email"
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="phone"
                            className="form-control"
                            placeholder="Enter your phone"
                            name="phone"
                            value={user.phone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter your Website"
                            name="website"
                            value={user.website}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button className="btn btn-block primary_color text-light" type="submit">
                        {id !== 'new_user' ? 'Save Changes' : 'Add User'}
                    </button>

                </form>
            </div>
        </div>
    )
}

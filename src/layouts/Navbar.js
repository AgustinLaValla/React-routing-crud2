import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark primary_color shadow-lg" style={{padding:'15px 0px'}}>
            <div className="container">
                <a className="navbar-brand" href="#">React-CRUD</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <NavLink className="nav-link" exact to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about"  >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact" >Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <Link className="btn btn-outline-light" to={`/users/edit/new_user`}>Add User</Link>

            </div>
        </nav>

    )
}

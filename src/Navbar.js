import React from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
    const location = useLocation()

    return (
        <nav className={`navbar ${location.pathname === '/' ? 'home-navbar' : 'other-navbar'}`}>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Forside
                    </NavLink>
                    {/* Used to create navigation links. It allows us to apply an active class to the link when it matches the current rout*/}
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/sub"
                        className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Opskrifter
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/add-recipe"
                        className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        Tilføj Opskrift
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

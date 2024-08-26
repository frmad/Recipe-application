import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/sub">Sub</Link></li>
                <li><Link to="/add-recipe">RecipeForm</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

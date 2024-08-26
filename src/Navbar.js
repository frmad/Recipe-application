import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Main</Link></li>
                <li><Link to="/sub">Sub</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

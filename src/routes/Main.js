import React from 'react';
import '../css/Main.css';
import {Link} from "react-router-dom";

function Main() {
    return (
        <div className="main-container">
            <h1>Main Page</h1>
            <p>Welcome to the Main Page.</p>
            <Link to="/sub">Find recipes here</Link>
        </div>
    );
}

export default Main;

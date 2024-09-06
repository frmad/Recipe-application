import React from 'react';
import '../css/Main.css';
import {Link} from "react-router-dom";

function Main() {
    return (
        <div className="main-container">
            <h1>Welcome to My Recipe Forum</h1>
            <p>Discover and add your favorite recipes. Whether you're looking for a quick meal or a special dish, you'll find inspiration here.</p>
            <Link to="/sub">Browse Recipes Here</Link>
        </div>
    );
}

export default Main;

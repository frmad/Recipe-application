import React from 'react';
import '../css/Main.css';
import {Link} from "react-router-dom";

function Main() {
    return (
        <div className="main-container">
            <h1>Velkommen til Mit Opskriftsforum</h1>
            <p>Opdag og tilføj dine yndlingsopskrifter. Uanset om du leder efter et hurtigt måltid eller en særlig ret,
                kan du finde inspiration her.</p>
            <Link to="/sub">Gennemse Opskrifter Her</Link>
        </div>
    );
}

export default Main;

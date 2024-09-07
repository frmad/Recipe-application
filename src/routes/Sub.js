import React from 'react';
import Recipe from "./Recipes";
import '../css/Sub.css';

function Sub() {

    return (
        <div>
            <div className="subContainer">
                <h1>Opskrifter</h1>
                <p><strong>Find Opskrifter Her</strong></p>
            </div>
            <Recipe/>
        </div>
    );
}

export default Sub;

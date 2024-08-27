import React from 'react';
import Recipe from "./Recipes";
import '../css/Sub.css';

function Sub() {

    return (
        <div>
            <div className="subContainer">
                <h1>Recipes</h1>
                <p><strong>Find recipes here</strong></p>
            </div>
            <Recipe/>
        </div>
    );
}

export default Sub;

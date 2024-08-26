import React from 'react';
import Recipe from "./Recipes";

function Sub() {
    const sampleRecipe = {
        name: "Chocolate Cake",
        ingredients: [
            { id: 1, name: "Flour" },
            { id: 2, name: "Sugar" },
            { id: 3, name: "Cocoa Powder" }
        ],
        instructions: "Mix all ingredients and bake at 350°F for 30 minutes."
    };

    return (
        <div>
            <h1>Sub Page</h1>
            <p>Welcome to the Sub Page.</p>
            <Recipe />
        </div>
    );
}

export default Sub;

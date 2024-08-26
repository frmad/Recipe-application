import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import axios from 'axios';
import '../css/Recipes.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/recipes')
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    const handleDelete = (id) => {
        setRecipes(recipes.filter(recipe => recipe._id !== id)); // Remove deleted recipe from state
    };

    return (
        <div className="recipes-container">
            <h2 className="recipes-title">Recipes</h2>
            <p className="recipes-intro">
                Welcome to the Recipes page, where you'll discover an assortment of delicious recipes.
            </p>
            <div className="recipes-list">
                {recipes.map(recipe => (
                    <RecipeCard
                        key={recipe._id}
                        id={recipe._id} // Pass ID to RecipeCard
                        title={recipe.title}
                        description={recipe.description}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                        onDelete={handleDelete} // Pass the delete handler
                    />
                ))}
            </div>
        </div>
    );
};

export default Recipes;

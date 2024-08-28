import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import axios from 'axios';
import '../css/Recipes.css';
import Popup from "./Popup";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [category, setCategory] = useState('All');

    useEffect(() => {
        axios.get('http://localhost:5000/recipes')
            .then(response => setRecipes(response.data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    const handleDelete = (id) => {
        setRecipes(recipes.filter(recipe => recipe._id !== id)); // Remove deleted recipe from state
    };

    const filterRecipes = category === 'All' ? recipes : recipes.filter(recipe => recipe.category === category);


    return (
        <div className="recipes-container">
            {/*<h2 className="recipes-title">Recipes</h2>*/}
            <p className="recipes-intro">
                Welcome to the Recipes page, where you'll discover an assortment of delicious recipes.
            </p>
            <Popup recipes={recipes}/>
            <div className="categoryButtons">
                <button onClick={() => setCategory('Breakfast')}>Breakfast</button>
                <button onClick={() => setCategory('Lunch')}>Lunch</button>
                <button onClick={() => setCategory('Dinner')}>Dinner</button>
                <button onClick={() => setCategory('Snack')}>Snacks</button>
                <button onClick={() => setCategory('All')}>Nulstil</button>
            </div>
            <div className="recipes-list">
            {filterRecipes.length > 0 ? (
                    filterRecipes.map(recipe => (
                        <RecipeCard
                            key={recipe._id}
                            id={recipe._id}
                            title={recipe.title}
                            description={recipe.description}
                            ingredients={recipe.ingredients}
                            instructions={recipe.instructions}
                            onDelete={handleDelete}
                        />
                    ))
                ):(
                    <div className="noItems">
                        <p>No recipes to show</p>
                    </div>
                )}
            </div>
            {/*<h1>Dinner</h1>
            <div className="recipes-list">
                {dinner.map(recipe => (
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
            </div>*/}
        </div>
    );
};

export default Recipes;

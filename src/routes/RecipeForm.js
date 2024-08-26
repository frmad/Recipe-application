import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); //stops the form from submitting in the traditional way, which would involve reloading the page.

        // Process the ingredients input
        const ingredientList = ingredients.split('\n')  // Split by newlines into an array
            .map(item => item.trim())                             // Trim whitespace from each item
            .filter(item => item);                                // Remove any empty items

        // Process the instructions input
        const instructionList = instructions.split('\n')  // Split by newlines into an array
            .map(item => item.trim())                               // Trim whitespace from each item
            .filter(item => item);                                  // Remove any empty items

        const newRecipe = {
            title,
            description,
            ingredients: ingredientList,
            instructions: instructionList,
            category
        };

        axios.post('http://localhost:5000/recipes', newRecipe)
            .then(response => {
                console.log('Recipe added:', response.data);
                // Optionally, clear form fields
                setTitle('');
                setDescription('');
                setIngredients('');
                setInstructions('');
                setCategory('');
            })
            .catch(error => console.error('Error adding recipe:', error));

    };

    return (
        <div>
            <p>Split by newlines</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Ingredients (one per line):</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Instructions (one per line):</label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="snack">Snack</option>
                    </select>
                </div>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default RecipeForm;

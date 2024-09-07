import React, { useState } from 'react';
import axios from 'axios';
import '../css/RecipeForm.css';

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
            <div className="subContainer">
                <h1>Tilføj Opskrift Her</h1>
                <p><strong>Input er delt pr. linje</strong></p>
            </div>
            <form onSubmit={handleSubmit} className="recipe-form">
                <div className="form-group">
                    <label htmlFor="title">Titel:</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Beskrivelse:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="form-textarea"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ingredients">Ingredienser (en per linje):</label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                        className="form-textarea"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="instructions">Instruktioner (en per linje):</label>
                    <textarea
                        id="instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        required
                        className="form-textarea"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Kategori:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="form-select"
                    >
                        <option value="">Vælg en kategori</option>
                        <option value="Breakfast">Morgenmad</option>
                        <option value="Lunch">Frokost</option>
                        <option value="Dinner">Aftensmad</option>
                        <option value="Snack">Snack</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">Tilføj Opskrift</button>
            </form>
        </div>
    );
};

export default RecipeForm;

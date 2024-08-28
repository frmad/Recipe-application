import React, { useState } from 'react';
import '../css/RecipeCard.css';
import axios from "axios";

const RecipeCard = ({ title, description, ingredients, instructions, id, onDelete }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    // In handleDelete function
    const handleDelete = () => {
        console.log(`Attempting to delete recipe with ID: ${id}`);
        axios.delete(`http://localhost:5000/recipes/${id}`)
            .then(response => {
                console.log('Recipe deleted:', response.data);
                if (onDelete) onDelete(id); // Call the onDelete prop if provided
            })
            .catch(error => {
                console.error('Error deleting recipe:', error);
            });
    };

    return (
        <div className="column">
            <div className={`card ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
                <h3>{title}</h3>
                <p>{description}</p>
                {expanded && (
                    <div className="expanded-content">
                        <h4>Ingredients:</h4>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <h4>Instructions:</h4>
                        <ol>
                            {instructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ol>
                        <button onClick={handleDelete} className="deleteButton">Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeCard;

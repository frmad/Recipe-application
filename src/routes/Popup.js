import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import '../css/Popup.css';

function Popup({ recipes }) {
    const [isVisible, setIsVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handlePopup = () => {
        setIsVisible(!isVisible);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter recipes based on search term
    const search = () => {
        const searchTermLower = searchTerm.toLowerCase();
        return recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(searchTermLower) ||
            recipe.description.toLowerCase().includes(searchTermLower) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTermLower))
        );
    };

    return (
        <div>
            <button onClick={handlePopup} className="searchButton">Open Search</button>
            {isVisible && (
                <div className="popup-overlay" onClick={handlePopup}>
                    <div className="popup-container" onClick={e => e.stopPropagation()}>
                        <div className="popup-header">
                            <h1>React Search</h1>
                            <button className="popup-close-button" onClick={handlePopup}>Close</button>
                        </div>
                        <div className="search">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleChange}
                                placeholder="Search..."
                            />
                        </div>
                        <div className="search-results">
                            {search().length > 0 ? (
                                search().map(recipe => (
                                    <RecipeCard
                                        key={recipe._id}
                                        title={recipe.title}
                                        description={recipe.description}
                                        ingredients={recipe.ingredients}
                                        instructions={recipe.instructions}
                                    />
                                ))
                            ) : (
                                <p>No recipes found</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Popup;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // This is required to parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/recipe_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
});

// Define Recipe Schema and Model
const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    ingredients: [String],
    instructions: [String],
    category: String
});
const Recipe = mongoose.model('Recipe', recipeSchema);

// Define Routes

// GET route to fetch recipes
app.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).send('Error fetching recipes');
    }
});

// POST route to add a new recipe
app.post('/recipes', async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).send('Error adding recipe');
    }
});

// DELETE recipe by ID
// In your DELETE route
app.delete('/recipes/:id', async (req, res) => {
    const { id } = req.params;
    console.log(`Deleting recipe with ID: ${id}`);
    try {
        const recipe = await Recipe.findByIdAndDelete(id);
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        console.error('Error deleting recipe:', error);
        res.status(500).send('Error deleting recipe');
    }
});



// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';  // Ensure this import path is correct
import Main from './routes/Main';
import Sub from './routes/Sub';
import RecipeForm from './routes/RecipeForm'

function App() {
    return (
        <div className="App">
            <Navbar /> {/* Navbar will always be displayed */}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sub" element={<Sub />} />
                <Route path="/add-recipe" element={<RecipeForm />} />
            </Routes>
        </div>
    );
}

export default App;

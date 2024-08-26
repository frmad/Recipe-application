import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';  // Ensure this import path is correct
import Main from './routes/Main';  // Ensure this import path is correct
import Sub from './routes/Sub';  // Ensure this import path is correct

function App() {
    return (
        <div className="App">
            <Navbar /> {/* Navbar will always be displayed */}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sub" element={<Sub />} />
            </Routes>
        </div>
    );
}

export default App;

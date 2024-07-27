import React from 'react';
import Home from './Home';
import { ThemeProvider } from './ThemeContext';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Home />
            </div>
        </ThemeProvider>
    );
}

export default App;

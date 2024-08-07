import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import './Layout.css';

const Layout = ({ children }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`layout ${theme}`}>
            <header className="header">
                <h1>Henry Sands-Grant</h1>
                <div className="nav-and-switch">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    <div className="theme-switch">
                        <input type="checkbox" id="switch" onChange={toggleTheme} checked={theme === 'dark'} />
                        <label htmlFor="switch" className="switch-label">
                            <span className="switch-button"></span>
                        </label>
                    </div>
                </div>
            </header>
            <main className={`background ${theme}`}>{children}</main>
            <footer className="footer">
                <p>&copy; 2024 Henry Sands-Grant. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;

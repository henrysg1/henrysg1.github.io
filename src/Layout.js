import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Layout.css';

const Layout = ({ children }) => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const location = useLocation(); // Get the current location

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        
        // Scroll to the top of the page on route change
        window.scrollTo(0, 0);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [location]); // Dependency array includes location

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`layout ${theme}`}>
            <header className="header">
                <h1>Henry Sands-Grant</h1>
                <div className="nav-and-switch">
                    {/* Desktop theme switch on the right */}
                    {windowWidth < 768 && (
                        <div className="theme-switch">
                            <input type="checkbox" id="desktop-switch" onChange={toggleTheme} checked={theme === 'dark'} />
                            <label htmlFor="desktop-switch" className="switch-label">
                                <span className="switch-button"></span>
                            </label>
                        </div>
                    )}
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ☰
                    </button>
                    {/* Desktop navigation */}
                    <nav className="nav desktop-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    {/* Mobile dropdown navigation */}
                    <nav className={`nav dropdown-nav ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/about" onClick={toggleMenu}>About</Link>
                        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    </nav>
                    {/* Mobile theme switch on the left */}
                    {windowWidth >= 768 && (
                        <div className="theme-switch mobile">
                            <input type="checkbox" id="mobile-switch" onChange={toggleTheme} checked={theme === 'dark'} />
                            <label htmlFor="mobile-switch" className="switch-label">
                                <span className="switch-button"></span>
                            </label>
                        </div>
                    )}
                </div>
            </header>
            <main className={`background ${theme}`}>{children}</main>
            <footer className="footer">
                <p>&copy; 2024 Henry Sands-Grant. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/henrysg1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/henry-sands-grant" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

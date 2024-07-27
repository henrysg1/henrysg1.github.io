import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from './ThemeContext';
import './Home.css';

const Home = () => {
    const { theme, toggleTheme } = useTheme();
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const projects = [
        { title: 'Project One', description: 'Description for project one.', image: 'https://via.placeholder.com/800x400' },
        { title: 'Project Two', description: 'Description for project two.', image: 'https://via.placeholder.com/800x400' },
        { title: 'Project Three', description: 'Description for project three.', image: 'https://via.placeholder.com/800x400' },
        { title: 'Project Four', description: 'Description for project four.', image: 'https://via.placeholder.com/800x400' },
        { title: 'Project Five', description: 'Description for project five.', image: 'https://via.placeholder.com/800x400' },
        { title: 'Project Six', description: 'Description for project six.', image: 'https://via.placeholder.com/800x400' }
    ];

    return (
        <div className={`home ${theme}`}>
            <header className="header">
                <h1>My Professional Website</h1>
                <button onClick={toggleTheme} className="toggle-theme">
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
            </header>
            <section className="introduction">
                <h2>About Me</h2>
                <p>Welcome to my personal website. I am a software developer with experience in building high-quality web applications. Here you can find some of the projects I have worked on.</p>
            </section>
            <section className="projects">
                <h2>My Projects</h2>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="project">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </Slider>
            </section>
            <footer className="footer">
                <p>&copy; 2024 Henry Sands-Grant. All rights reserved.</p>
            </footer>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-arrow-next`}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-arrow-prev`}
            onClick={onClick}
        />
    );
};

export default Home;

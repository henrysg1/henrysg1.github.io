import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import projectsList from './ProjectsData';
import './Home.css';
import { useTheme } from './ThemeContext';

const Home = () => {
    const { theme } = useTheme();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const sortedProjects = [...projectsList].sort((a, b) => {
        return b.id - a.id;
    });

    return (
        <div className={`home ${theme}`}>
            <section className="introduction">
                <h2>About Me</h2>
                <div className="about-me">
                    <div className="about-me-text">
                        <p>Welcome to my personal website. I am a software engineer with experience in building web applications and developing embedded software. 
                           I am also interested in hardware engineering, gaining experience in industry and at university where I studied Electronic Engineering. 
                           Here you can find some of the projects I have worked on.</p>
                    </div>
                    <img src="images/henry-banner.png" alt="My Portrait" className="about-me-image" />
                </div>
            </section>
            <section className="home-projects">
                <h2>My Projects</h2>
                <Slider {...settings}>
                    {sortedProjects.map((project) => (
                        <div key={project.id} className="home-project">
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <Link to={`/project/${project.id}`} className="read-more-btn">Read more</Link>
                        </div>
                    ))}
                </Slider>
            </section>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-arrow-next`}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-arrow-prev`}
            onClick={onClick}
        />
    );
};

export default Home;

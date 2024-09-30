import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import projectsList from './ProjectsData';
import './Home.css';
import { useTheme } from './ThemeContext';

const Home = () => {
    const { theme } = useTheme();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: windowWidth < 768 ? false : true, // Hide dots on small screens
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth < 768 ? 1 : 3, // Show 1 slide on small screens, 3 on larger
        slidesToScroll: windowWidth < 768 ? 1 : 3, // Scroll 1 slide on small screens, 3 on larger
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const sortedProjects = [...projectsList].sort((a, b) => {
        return b.id - a.id;
    });

    return (
        <div className={`home ${theme}`}>
            <section className="introduction">
                <h2>Welcome!</h2>
                <div className="about-me">
                    <div className="about-me-text">
                        <p>Welcome to my personal website. I am a software engineer with experience in building web applications and developing embedded software. 
                           I am also interested in hardware engineering, gaining experience in industry and at university where I studied Electronic Engineering. 
                           <br/><br/>Below, you can find some of the projects I have worked on. Feel free to check out the About and Project pages for more information!</p>
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

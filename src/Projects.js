import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import projectsList from './projectsData';

const Projects = () => {
    return (
        <div className="projects-page">
            <h2>All Projects</h2>
            <div className="projects-list">
                {projectsList.map((project) => (
                    <div key={project.id} className="project-item">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link to={`/project/${project.id}`}>Read more</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

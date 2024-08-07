import React, { useState } from 'react';
import projectsList from './ProjectsData';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    const [sortType, setSortType] = useState('newest');

    const sortedProjects = [...projectsList].sort((a, b) => {
        if (sortType === 'newest') {
            return b.id - a.id;
        } else if (sortType === 'oldest') {
            return a.id - b.id;
        } else if (sortType === 'recommended') {
            if (b.recommended === a.recommended) {
                return b.id - a.id; // If both are recommended or both are not, sort by newest
            }
            return b.recommended - a.recommended; // Sort by recommended first
        }
        return 0;
    });

    return (
        <div className="projects">
            <h2>All Projects</h2>
            <div className="filter-controls">
                <button onClick={() => setSortType('newest')}>Newest</button>
                <button onClick={() => setSortType('oldest')}>Oldest</button>
                <button onClick={() => setSortType('recommended')}>Recommended</button>
            </div>
            <div className="projects-list">
                {sortedProjects.map((project) => (
                    <div key={project.id} className="project-item">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <Link to={`/project/${project.id}`} className='read-more-btn'>Read more</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

import React from 'react';
import { useParams } from 'react-router-dom';
import projectsList from './ProjectsData'; // Import the project data
import './ProjectDetail.css'; // Import the CSS file for styling

const ProjectDetail = () => {
    const { id } = useParams(); // Get the project ID from the URL
    const project = projectsList.find(project => project.id === parseInt(id)); // Find the project with the given ID

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-details">
            <h1>{project.title}</h1>
            <img src={`../${project.image}`} alt={project.title} className="project-image" />
            <div className="project-description">
                <p>{project.description}</p>
                <div>{project.details}</div> {/* Render the JSX content */}
            </div>
        </div>
    );
};

export default ProjectDetail;

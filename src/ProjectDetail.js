import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project-detail">
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <p>{project.details}</p>
        </div>
    );
};

export default ProjectDetail;

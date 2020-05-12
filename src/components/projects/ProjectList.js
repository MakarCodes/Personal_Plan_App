import React from 'react';

import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    let projectList = '';
    projects ? (
        projectList = projects.map(project => {
            return (
                <Link to={"/project/" + project.id}  key={project.id}>
                    <ProjectSummary project={project}/>
                </Link>
            )
        })
    ) 
    : 
    (projectList = <p>No projects to do!</p>)
    return (
        <div className="project-list section">
            {projectList}
        </div>
    );
};

export default ProjectList;
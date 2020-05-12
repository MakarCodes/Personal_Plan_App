import React from 'react';

import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {
    let projectList = '';
    projects ? (
        projectList = projects.map(project => {
            return (
                <ProjectSummary project={project} key={project.id}/>
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
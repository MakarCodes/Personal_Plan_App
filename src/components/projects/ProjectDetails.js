import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus fugit consectetur eos accusantium. Amet non, officiis labore doloribus maiores asperiores.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Jarek</div>
                    <div>11th May, 2020</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
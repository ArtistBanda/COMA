
import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0.5">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
                </div>
                <div className="card-action red lighten-4 black-text">
                    <div>Posted by Arpit</div>
                    <div>18november, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
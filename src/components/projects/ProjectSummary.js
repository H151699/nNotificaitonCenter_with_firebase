import React from 'react'

const ProjectSummary = ({project}) => {
    return(

        <div className="card z-depth-0 project-summary">
            <div className ="card-content grey-text text-darken-3">
                <span className="card-tittle"> {project.title} 
                <br/>
                {project.content}</span>
                <p>Posted by Andrew Jianyou Day </p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        
        </div> 
    )
}

export default ProjectSummary
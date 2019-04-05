import React from 'react'

const ProjectsDetails =(props) => {
    
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title -{id}</span>
                <p>Notification center Notificaiton center Notificaiton center  Notificaiton center Notificaiton center Notificaiton center</p>
            </div>

            <div  className="card-action gret lighten-4 grey-text">
                <div> Posted by JIANYOU </div>
                <div> 5 april </div>

            </div>
        </div>
    </div>
  )
}


export default ProjectsDetails
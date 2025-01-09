import React from "react";

const ProjectComp = ({project, setProjModal}) => {
    return (
        <div className="box" onClick={() => {setProjModal(project)}}>
            <img className="thumbnail" src={project.image} alt="Project thumbnail"></img>
            <h2 className="title">
                {project.title}
            </h2>
            {/* <p className="description">{project.description}</p> */}
            <span className={"skill " + project.field}>{project.field}</span>
            {/* <small className="time">{project.time}</small> */}
        </div>
    )
}



export default ProjectComp;
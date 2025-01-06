import React from "react";

const ProjectComp = ({project}) => {
    return (
        <div className="box" onClick={() => {if(project.link !== "") window.location.href = project.link;}}>
            <img className="thumbnail" src={project.image} alt="Project thumbnail"></img>
            <h2 className="title">
                {project.title}
            </h2>
            <p className="description">{project.description}</p>
            <ul className="skills">
                {project.skills.map((s) => {
                    return <li className="skill">{s}</li>
                })}
            </ul>
            <small className="time">{project.time}</small>
        </div>
    )
}

export default ProjectComp;
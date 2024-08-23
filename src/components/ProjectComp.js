import React from "react";

const ProjectComp = ({project}) => {
    return (
        <div className="box">
            <h2 className="title">
                <a href={project.link}>
                    {project.title}
                </a>
            </h2>
            <p className="description">{project.description}</p>
            <img className="thumbnail" src={project.image}></img>
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
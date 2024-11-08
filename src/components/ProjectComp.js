import React from "react";

const ProjectComp = ({project}) => {
    return (
        <div className="box">
            <h2 className="title">
                {
                    (project.link !== "") ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.title}
                        </a>
                        ) : (
                        project.title
                        )
                }
            </h2>
            <p className="description">{project.description}</p>
            <img className="thumbnail" src={project.image} alt="Project thumbnail"></img>
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
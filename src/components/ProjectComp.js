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
            <p className="description lang-kr">{project.description}</p>
            <img className="thumbnail" src={`${process.env.PUBLIC_URL}${project.image}`} alt="Project thumbnail"></img>
            <ul className="skills">
                {project.skills.map((s) => {
                    return <li className="skill lang-kr">{s}</li>
                })}
            </ul>
            <small className="time">{project.time}</small>
        </div>
    )
}

export default ProjectComp;
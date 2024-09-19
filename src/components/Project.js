import React from "react";

const Project = ({title, link, description, skills, time}) => {
    return (
        <div className="box">
            <h2 className="title">
                <a href={link}>
                    {title}
                </a>
            </h2>
            <p className="description">{description}</p>
            <ul className="skills">
                {skills.map((s) => {
                    return <li className="skill">{s}</li>
                })}
            </ul>
            <small className="time">{time}</small>
        </div>
    )
}

export default Project;
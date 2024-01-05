import React from "react";

const Project = ({title, link, description, skills, time}) => {
    return (
        <div className="box">
            <video className="projectVid"
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline
                disablePictureInPicture="true"
                poster="/assets/img/PR_vid_poster.webp">
                <source src="/assets/video/PR_vid_1920.webm" type="video/webm" />
                <source src="/assets/video/PR_vid_1920.mp4" type="video/mp4" />
            </video>
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
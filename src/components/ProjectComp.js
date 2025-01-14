import React, { useEffect, useRef, useState } from "react";

const ProjectComp = ({project, setProjModal}) => {

    const [isRendered, setIsRendered] = useState(false);
    const [onceRendered, setOnceRendered] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsRendered(entry.isIntersecting);
        })
        if (ref.current) {
            observer.observe(ref.current);
          }
      
          return () => {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          };
    }, []);



    useEffect(() => {
        if(isRendered) setOnceRendered(true);
    }, [isRendered])

    return (
        <div className="box" ref={ref} onClick={() => {setProjModal(project)}} style={(onceRendered) ? {animation: "loadup .5s ease"} : {transform: "translateY(20%)"}}>
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
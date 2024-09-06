import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectComp from "../components/ProjectComp";
import "../scss/projectsStyle.scss";
const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getProjects = async () => {
            const {data} = await axios.get("/projects/json");
            setProjects(data);
        };
        getProjects();
    }, [])
    return (
        <section className="projects">
            {
                projects.map(
                    (project) => {
                        return (<ProjectComp project={project} />);
                    }
                )
            }
        </section>
    );
}

export default ProjectsPage;
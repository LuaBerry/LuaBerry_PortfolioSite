import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectComp from "../components/ProjectComp";
import Sidebar from '../components/Sidebar';
import "../scss/projectsStyle.scss";
const ProjectsPage = ({lang}) => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getProjects = async () => {
            const {data} = await axios.get("/projects/json");
            setProjects(data);
        };
        getProjects();
    }, [])
    return (
        <>
        <section id="projects">  
            {
                projects.map(
                    (project) => {
                        return (<ProjectComp project={project} />);
                    }
                )
            }
        </section>
        <Sidebar />
        </>
    );
}

export default ProjectsPage;
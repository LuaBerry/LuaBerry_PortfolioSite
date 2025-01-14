import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import ProjectComp from "../components/ProjectComp";
import Sidebar from '../components/Sidebar';
import "../scss/projectsStyle.scss";

const ProjectsPage = ({lang}) => {
    const [projects, setProjects] = useState([]);
    const [projModal, setProjModal] = useState(null);
    useEffect(() => {
        const getProjects = async () => {
            const {data} = await axios.get("/projects/json");
            setProjects(data);
        };
        getProjects();
    }, [])
    return (
        <>
        <ProjectModal projModal={projModal} setProjModal={setProjModal}>
        </ProjectModal>
        <section id="projects">  
            {
                projects.map(
                    (project) => {
                        return (<ProjectComp project={project} setProjModal={setProjModal}/>);
                    }
                )
            }
        </section>
        <Sidebar />
        </>
    );
}

const ProjectModal = ({projModal, setProjModal}) => {
    return (
        <ReactModal
        id="projmodal"
        isOpen={projModal !== null}
        onRequestClose={() => setProjModal(null)}
        style={customModalStyles}
        ariaHideApp={false}
        contentLabel="Pop up Message"
        shouldCloseOnOverlayClick={true}
        >
        {(projModal !== null) ? (
            <>
            <button onClick={() => {setProjModal(null)}}></button>
            <video src={projModal.video} type="video/mp4" autoPlay loop muted></video>
            <h2>{projModal.title}</h2>
            <p>{projModal.description}</p>
            <ul className="skills">
            {projModal.skills.map((skill) => {
                return(<li>{skill}</li>);
            })}
            </ul>
            <span>{projModal.time}</span>
            </>) : (<></>)}
        </ReactModal>
    )
}

const customModalStyles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "75%",
      maxWidth: "680px",
      height: "75%",
      maxHeight: "756px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  };

export default ProjectsPage;
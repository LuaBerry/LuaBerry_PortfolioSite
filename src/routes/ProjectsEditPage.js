import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../scss/projectsEditStyle.scss';

const ProjectsEditPage = () => {
    const [project, setProject] = useState([]);
    const {id} = useParams();
    useEffect(()=> {
        if (id) {
            const getProject = async () => {
                const {data} = await axios.get("/projects/edit/json/"+ id);
                setProject(data);
            }
            getProject();
        }
    }, []);

    return (
        <section id='projectEdit'>
            <form action={"/projects/edit/update/" + id} method="POST">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={project.title} />

                <label htmlFor="link">Link</label>
                <input type="text" id="link" name="link" value={project.link} />

                <label htmlFor="image">Image</label>
                <input type="text" id="image" name="image" value={project.image} />

                <label htmlFor="preview">Preview</label>
                <input type="text" id="preview" name="preview" value={project.preview} />

                <label htmlFor="field">Field</label>
                <input type="text" id="field" name="field" value={project.field} />

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="5" cols="50" defaultValue={project.description}/>

                <label htmlFor="descriptionKR">Description (Korean)</label>
                <textarea id="descriptionKR" name="descriptionKR" rows="5" cols="50" defaultValue={project.descriptionKR}/>

                <label htmlFor="skills">Skills</label>
                <input type="text" id="skills" name="skills" value={project.skills} />

                <label htmlFor="time">Time</label>
                <input type="text" id="time" name="time" value={project.time} />

                <button type="submit">{(id) ? "Update" : "Create"}</button>
            </form>
        </section>
    );
};

export default ProjectsEditPage;

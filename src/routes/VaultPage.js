import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LinksPage = () => {
    const [links, setLinks] = useState([]);
    useEffect(() => {
        const getProjects = async () => {
            const {data} = await axios.get("/links/json");
            setLinks(data);
        };
        getProjects();
    }, []);
    return (
        <section>
                        {
                links.map(
                    (link) => {
                        return (
                        <><a href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a><br></br></>);
                    }
                )
            }
        </section>
    );
};

export default LinksPage;

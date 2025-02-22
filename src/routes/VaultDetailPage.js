import React from 'react';
import { useLocation } from 'react-router-dom';
import '../scss/vaultDetailStyle.scss';
import { marked } from 'marked';
import Markdown from 'marked-react';

const VaultPage = () => {
    const location = useLocation();
    
    if(location.state === null || location.state === undefined) {
        return null;
    }
    const {vault} = location.state;

    return (
        <section id='vaultdetail'>
            <img className="thumbnail" src={vault.image} alt="vault thumbnail"></img>
            <h1 className="title">
                {vault.title}
            </h1>
            <span>
                {vault.time}
            </span>
            {
                vault.paragraphs.map((p)=> {
                    console.log(p);
                    return (<Markdown>{p}</Markdown>);
                })
            }

            <a href={vault.link} ><h2>
            Cram Sheet
            </h2></a>

        </section>
    );
};

export default VaultPage;

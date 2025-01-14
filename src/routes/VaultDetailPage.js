import React from 'react';
import { useLocation } from 'react-router-dom';
import '../scss/vaultDetailStyle.scss';

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
            <p>
            Preparing page
            </p>

            <a href={vault.link} ><h2>
            Cram Sheet
            </h2></a>

        </section>
    );
};

export default VaultPage;

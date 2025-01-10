import React from 'react';
import { useLocation } from 'react-router-dom';
import '../scss/vaultStyle.scss';

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
            <p>
                In this course, we learn the
            </p>
            <span>
                {vault.time}
            </span>
        </section>
    );
};

export default VaultPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VaultComp from '../components/VaultComp';
import '../scss/vaultStyle.scss';

const VaultPage = () => {
    const [vault, setVault] = useState([]);
    useEffect(() => {
        const getVault = async () => {
            const {data} = await axios.get("/vault/json");
            setVault(data);
        };
        getVault();
    }, []);
    return (
        <>
        <h1 style={{textAlign:"center", fontSize:"24px"}}>Page contents are under development.</h1>
        <section id='vault'>
            { vault.map((v) => { return (<VaultComp vault={v}/>); }) }
        </section>
        </>

    );
};

export default VaultPage;

import React from "react";
import { useNavigate } from "react-router-dom";

const VaultComp = ({vault}) => {
    const navigate = useNavigate();
    return (
        <div className="box" onClick={() => {navigate("/vault/detail", {state: {vault}})}}>
            <img className="thumbnail" src={vault.image} alt="vault thumbnail"></img>
            <span className="title">
                {vault.title}
            </span>
        </div>
    )
}

export default VaultComp;
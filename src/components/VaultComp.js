import React from "react";

const VaultComp = ({vault}) => {
    return (
        <div className="box" onClick={() => {window.open(vault.link);}}>
            <img className="thumbnail" src={vault.image} alt="vault thumbnail"></img>
            <span className="title">
                {vault.title}
            </span>
        </div>
    )
}

export default VaultComp;
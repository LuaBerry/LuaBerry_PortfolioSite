import React from "react";

const VaultComp = ({vault}) => {
    return (
        <div className="box">
            <img className="thumbnail" src={vault.image} alt="vault thumbnail"></img>
            <h2 className="title">
                {
                    (vault.link !== "") ? (
                        <a href={vault.link} target="_blank" rel="noopener noreferrer">
                          {vault.title}
                        </a>
                        ) : (
                        vault.title
                        )
                }
            </h2>
        </div>
    )
}

export default VaultComp;
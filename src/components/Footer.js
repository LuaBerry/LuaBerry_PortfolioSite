import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            {currentPath !== "/" ? (
                <footer className="foot">
                    <small>Copyright &copy; by LuaBerry All Right</small>
                </footer>
            ) : (
                <></>
            )
            }

        </>
        )
}

export default Footer;
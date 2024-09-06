import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../scss/navStyle.scss'

const Navigation = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <header>
            <DefaultNavigation loc={currentPath}></DefaultNavigation>
        </header>
    );
};

const DefaultNavigation = ({loc}) => {
    return (
        <div className={loc==="/" ? "homenav":"defnav"}>
            <nav>
                <div className="logo">
                <a href="/">
                    <img src={loc==="/" ? "/assets/img/new_logo_white.png":"/assets/img/new_logo.webp"}  alt="logo" height="50px" />
                </a>
                </div>
                <ul>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/insights">Personal Insights</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><a href="https://luaberry.tistory.com/" target="_blank" rel="noopener noreferrer">
                        Blog<i className="fa fa-external-link" style={{ fontSize: '10px' }} />
                    </a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
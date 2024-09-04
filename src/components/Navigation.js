import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {

    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <header>

                    {currentPath === "/" ? (
                        <HomeNavigation />
                    ) : (
                        <DefaultNavigation />
                    )}

        </header>
    );
};

const HomeNavigation = () => {
    return (
        <div className="container">
            <nav className="homenav">
                <div className="logo">
                    <a href="/">
                        <img src="/assets/img/new_logo_white.png" alt="logo" height="50px" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

const DefaultNavigation = () => {
    return (
        <div className="container">
            <nav>
                <div className="logo">
                <a href="/">
                    <img src="/assets/img/new_logo.webp" alt="logo" height="50px" />
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
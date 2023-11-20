import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <a href="/">
                            <img src="/assets/img/new_logo.webp" alt="logo" height="50px" />
                        </a>
                    </div>
                    <ul>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><a href="https://luaberry.tistory.com/" target="_blank" rel="noopener noreferrer">
                            Blog<i className="fa fa-external-link" style={{ fontSize: '10px' }}></i>
                        </a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
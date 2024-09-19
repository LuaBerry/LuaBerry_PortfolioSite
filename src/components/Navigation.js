import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <a href="/">
                            <img src={`${process.env.PUBLIC_URL}/img/new_logo.webp`} alt="logo" height="50px" />
                        </a>
                    </div>
                    <ul>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;
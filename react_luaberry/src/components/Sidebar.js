import React from 'react';
import '../css/sidebarStyle.css'

const Sidebar = () => (
    <div className="sidebar">
        <div className="profile">
            <div className="profile_outline">
                <img src="assets/img/profile.webp" alt="Profile Image" />
            </div>
        </div>
        <div className="contact">
            <h3>CONTACT</h3>
            <hr className="sidebar_line" />
            <ul>
                <li>
                    <a href="mailto:jeong.i.yeo.kr@gmail.com">
                        <i className="fa-regular fa-envelope"></i>
                        <span>jeong.i.yeo.kr@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://goo.gl/maps/hA1XZBdaGZewab567">
                        <i className="fa-regular fa-map fa-fw"></i>
                        <span>Seoul, Korea</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ji-yeo/">
                        <i className="fa-brands fa-linkedin-in"></i>
                        <span>linkedin.com/in/ji-yeo</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LuaBerry">
                        <i className="fa-brands fa-github"></i>
                        <span>github.com/LuaBerry</span>
                    </a>
                </li>
                <br />
            </ul>
        </div>
        <div className="index">
            <h3>INDEX</h3>
            <hr className="sidebar_line" />
            <ul>
                <li>About Me</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>References</li>
            </ul>
        </div>
    </div>
);

export default Sidebar;
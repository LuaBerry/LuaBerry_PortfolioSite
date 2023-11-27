import React from 'react';
import '../css/sidebarStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"

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
                        <FontAwesomeIcon icon={faEnvelope} fixedWidth/>
                        <span> jeong.i.yeo.kr@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://goo.gl/maps/hA1XZBdaGZewab567">
                        <FontAwesomeIcon icon={faMap} fixedWidth />
                        <span> Seoul, Korea</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/ji-yeo/">
                        <FontAwesomeIcon icon={faLinkedinIn} fixedWidth/>
                        <span> linkedin.com/in/ji-yeo</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/LuaBerry">
                        <FontAwesomeIcon icon={faGithub} fixedWidth/>
                        <span> github.com/LuaBerry</span>
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
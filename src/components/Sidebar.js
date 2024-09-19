import React from 'react';
import '../css/sidebarStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons"
import {faInstagram } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => (
    <div className="sidebar">
        <div className="profile">
            <div className="profile_outline">
                <img src={`${process.env.PUBLIC_URL}img/profile.jpg`} alt="Profile Image" />
            </div>
        </div>
        <div className="contact">
            <h3>CONTACT</h3>
            <hr className="sidebar_line" />
            <ul>
                <li>
                    <a href="mailto:jullyem8@naver.com">
                        <FontAwesomeIcon icon={faEnvelope} fixedWidth/>
                        <span>jullyem8@naver.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://maps.app.goo.gl/5qvtu3m7u9amZ4Z3A">
                        <FontAwesomeIcon icon={faMap} fixedWidth />
                        <span> Seoul, Korea</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/dumb_deedumb/">
                        <FontAwesomeIcon icon={faInstagram} fixedWidth/>
                        <span>@dumb_deedumb</span>
                    </a>
                </li>
                <br />
            </ul>
        </div>
    </div>
);

export default Sidebar;
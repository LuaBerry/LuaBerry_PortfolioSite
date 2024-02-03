import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../css/resumeStyle.css';

const ResumePage = () => {
    return (
        <section className='resume'>
            <Sidebar />
            <article className="contents">
                <div id="name">
                    <div className="bg">
                        <h1>YEO, JEONG IN</h1>
                        <hr />
                        <h3>Hanyang University Student</h3>
                    </div>
                </div>
                <Link to="/resumekr" className="langLink">
                    <small className="gray lang-kr">한국어 버전은 이쪽으로 →</small>
                </Link>
                <hr className="titleLine"/>
                <div id="personal_info">
                    <h3 className="subhead">About Me</h3>
                    <span>
                        Junior in <span className="accent">Computer Science</span> at Hanyang University.
                        <br />
                        I am looking for an opportunity to practice my skills and broaden my horizons.
                    </span>
                    <h4 className="subsubhead">Field of Interest</h4>
                    <li>Cloud Computing</li>
                </div>
                <div id="education">
                    <h3 className="subhead">Education</h3>
                    <span>
                        Hanyang University
                        <br />
                        <span className="italic">Undergraduate Student</span>
                        <li>Bachelor of Science in <span className="accent">Computer Science</span></li>
                        <li>Total GPA of 3.6.8/4.5 (91.8/100)</li>

                    </span>
                </div>
                <div id="experience">
                    <h3 className="subhead">Experience</h3>
                    <span>
                        OOPArts
                        <li>Game Dev Society <span className="accent">President</span></li>
                        <li>Swift COVID response with Online Game Dev tutoring &amp; Showcase</li>
                        <li>2020~2021</li>
                        <br/>
                        Game Outsourcing Project: "Hidden World"
                        <li>Unity Marine tourism app with AR navigation &amp; real-time marine life models</li>
                        <li>Animation, AR, Optimization</li>
                        <li>2020.11~2021.01</li>
                        <br/>
                        KATUSA
                        <li>Korean Augmentation To the <span className="accent">US Army</span></li>
                        <li>2021.06 - 2022.12</li>
                    </span>
                </div>
                <div id="skills">
                    <h3 className="subhead">Certification</h3>
                    <span>
                        TOEIC
                        <li>Test of English</li>
                        <li>2020.07</li>
                        <li>950/990</li>
                        <br/>
                        SQLD
                        <li>SQL Developer</li>
                        <li>2023.04</li>
                    </span>
                    <h3 className="subhead">Technical Skills</h3>
                    <span>
                        Intermediate
                        <li>C#</li>
                        <li>Python</li>
                        <br/>
                        Elementary
                        <li>C, C++</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                    </span>
                    <h3 className="subhead">Language</h3>
                    <span>
                        Korean
                        <li>Native</li>
                        <br/>
                        English
                        <li>Intermediate (B2~C1)</li>
                        <li>Limited working proficiency</li>
                        <br/>
                        Japanese
                        <li>Elementary (A2)</li>
                        <li>Able to travel alone</li>
                        <br/>
                        French
                        <li>Beginner (A1)</li>
                        <li>Basic communication</li>
                        <br/>
                    </span>
                </div>
                <div id="references">
                    <h3 className="subheadReferences">
                        <span></span>
                    </h3>
                </div>
            </article>
        </section>
    );
};

export default ResumePage;

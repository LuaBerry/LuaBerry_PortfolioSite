import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/resumeStyle.css';

const Resume = () => {
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
                <a href="./resumeKR">
                    <small>한국어 버전은 이쪽으로 →</small>
                </a>
                <div id="personal_info">
                    <h3 className="subhead">About Me</h3>
                    <span>
                        Sophomore in <span className="accent">Computer Science</span> at Hanyang University.
                        <br />
                        I am looking for an opportunity to practice my skills and broaden my horizons.
                    </span>
                </div>
                <div id="education">
                    <h3 className="subhead">Education</h3>
                    <span>
                        Hanyang University
                        <br />
                        <span className="italic">Undergraduate Student</span>
                        <ul>
                            <li>Bachelor of Science in <span className="accent">Computer Science</span></li>
                            <li>Total GPA of 3.5/4.5 (90.0/100)</li>
                        </ul>
                    </span>
                </div>
                <div id="experience">
                    <h3 className="subhead">Experience</h3>
                    <span>
                        OOPArts
                        <ul>
                            <li>Game Dev Society <span className="accent">President</span></li>
                            <li>Swift COVID response with Online Game Dev tutoring &amp; Showcase</li>
                            <li>2020~2021</li>
                            <li>Game Outsourcing Project: "Hidden World"</li>
                            <li>Unity Marine tourism app with AR navigation &amp; real-time marine life models</li>
                            <li>Animation, AR, Optimization</li>
                            <li>2020.11~2021.01</li>
                            <li>KATUSA <span className="accent">Korean Augmentation To the US Army</span></li>
                            <li>2021.06 - 2022.12</li>
                        </ul>
                    </span>
                </div>
                <div id="skills">
                    <h3 className="subhead">Certification</h3>
                    <span>
                        TOEIC
                        <ul>
                            <li>Test of English</li>
                            <li>2020.07</li>
                            <li>950/990</li>
                        </ul>
                        SQLD
                        <ul>
                            <li>SQL Developer</li>
                            <li>2023.04</li>
                        </ul>
                    </span>
                    <h3 className="subhead">Technical Skills</h3>
                    <span>
                        Intermediate
                        <ul>
                            <li>C#</li>
                            <li>Python</li>
                        </ul>
                        Elementary
                        <ul>
                            <li>C, C++</li>
                            <li>JavaScript</li>
                            <li>SQL</li>
                        </ul>
                    </span>
                    <h3 className="subhead">Language</h3>
                    <span>
                        Korean
                        <ul>
                            <li>Native</li>
                        </ul>
                        English
                        <ul>
                            <li>Intermediate (B2~C1)</li>
                            <li>Limited working proficiency</li>
                        </ul>
                        Japanese
                        <ul>
                            <li>Elementary (A2)</li>
                            <li>Able to travel alone</li>
                        </ul>
                        French
                        <ul>
                            <li>Beginner (A1)</li>
                            <li>Basic communication</li>
                        </ul>
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

export default Resume;

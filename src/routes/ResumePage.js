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
                        Junior student in <span className="accent">Computer Science</span> at Hanyang University.
                        <br />
                        After my military service with the US Army, I aspire to work in the United States.
                        <br />
                        Therefore, I am committed to pursuing a CS Master's degree in the US after I graduate.
                    </span>
                    {/* <h4 className="subsubhead">Field of Interest</h4>
                    <li>Cloud Computing</li> */}
                </div>
                <div id="education">
                    <h3 className="subhead">Education</h3>
                    <span>
                        Hanyang University
                        <br />
                        <span className="italic">Undergraduate Student</span>
                        <li>Bachelor of Science in <span className="accent">Computer Science</span></li>
                        <li>Current Total GPA of 3.52/4.0</li>

                    </span>
                </div>
                <div id="experience">
                    <h3 className="subhead">Experience</h3>
                    <span>
                        OOPArts
                        <li>Game Dev Society <span className="accent">President</span></li>
                        <li>Swift COVID response with online tutoring &amp; showcase</li>
                        <li>2020.01 ~ 2021.05</li>
                        <br/>
                        KATUSA
                        <li>Korean Augmentation To the <span className="accent">US Army</span></li>
                        <li>S1 Personnel Clerk: Automated conventional error-prone process</li>
                        <li>2021.06 ~ 2022.12</li>
                    </span>
                </div>
                <div id="skills">
                    <h3 className="subhead">Certification</h3>
                    <span>
                        SQLD
                        <li>SQL Developer</li>
                        <li>2023.04</li>
                    </span>
                    <h3 className="subhead">Technical Skills</h3>
                    <span>
                        Competent (Short professional experience)
                        <li>Unity Engine</li>
                        <li>C#</li>
                        <br/>
                        Familiar (Personal project experience)
                        <li>React.js, Express.js, Node.js, MongoDB</li>
                        <li>Unreal Engine, Blender 3D</li>
                        <li>C, C++, JavaScript, Python</li>
                    </span>
                    <h3 className="subhead">Language</h3>
                    <span>
                        Korean
                        <li>Native</li>
                        <br/>
                        English
                        <li>Advanced (C1)</li>
                        <li>Professional proficiency</li>
                        <li>GRE V:153 Q:169 AW:TBD</li>
                        <br/>
                    </span>
                </div>
                {/* <div id="references">
                    <h3 className="subhead">References</h3>
                        <span></span>
                </div> */}
                <br/>
                <br/>
                <br/>
            </article>
        </section>
    );
};

export default ResumePage;

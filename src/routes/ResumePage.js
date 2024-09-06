import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../scss/resumeStyle.scss';

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
                        After my military service with US Army, I am determined to pursue a career in the United States.
                        <br />
                        Therefore, I aspire Master's degree in the US after my graduation.
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
                        <li>Total GPA of 3.52/4.0</li>

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
                        <li>S1 Personnel Clerk: Streamlined conventional workflow & automated error-prone process</li>
                        <li>2021.06 ~ 2022.12</li>
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
                        Competent (Short professional experience)
                        <li>Unity Engine</li>
                        <li>C#</li>
                        <br/>
                        Familiar (Personal project experience)
                        <li>React.js, Express.js, Node.js, MongoDB</li>
                        <li>Unreal Engine, Blender 3D</li>
                        <li>C, C++, JavaScript, Python</li>
                        {/* <br/>
                        Novice (Theoretical knowledge)
                        <li>SQL</li> */}
                    </span>
                    <h3 className="subhead">Language</h3>
                    <span>
                        Korean
                        <li>Native</li>
                        <br/>
                        English
                        <li>Advanced (C1)</li>
                        <li>Professional proficiency</li>
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

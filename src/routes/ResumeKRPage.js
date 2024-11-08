import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../scss/resumeStyle.scss';

const ResumeKRPage = () => {
    return (
        <section className='resume'>
            <Sidebar />
            <article className="contents">
                <div id="name">
                    <div className="bg">
                        <h1 className='lang-kr'>여정인</h1>
                        <hr />
                        <h3 className='lang-kr'>한양대학교 학부생</h3>
                    </div>
                </div>
                <Link to="/resume" className="langLink">
                    <small className="blackgray englink">For English version →</small>
                </Link>
                <hr className="titleLine"/>
                <div id="personal_info">
                    <h3 className="subhead">About Me</h3>
                    <span className='lang-kr'>
                        한양대학교 <span className="accent lang-kr">컴퓨터 소프트웨어 학부</span> 3학년생 입니다.
                        <br />
                        카투사 복무 후 미국에서 일하고 싶다는 열망이 생겨 학사 졸업 후 미국 석사를 계획하고 있습니다.
                    </span>
                    {/* <h4 className="subsubhead">Field of Interest</h4>
                    <li className="lang-kr">클라우드 컴퓨팅</li> */}
                </div>
                <div id="education">
                    <h3 className="subhead">Education</h3>
                    <span className='lang-kr'>
                        한양대학교 학부생
                        <li className='lang-kr'>컴퓨터 소프트웨어학부</li>
                        <li className='lang-kr'>현재 학점 3.74/4.5 (91.8/100)</li>
                    </span>
                </div>
                <div id="experience">
                    <h3 className="subhead">Experience</h3>
                    <span className='lang-kr'>
                    오파츠 OOPArts
                    <li className='lang-kr'>게임 개발 동아리 <span className="accent lang-kr">회장</span></li>
                    <li className='lang-kr'>코로나 상황 대응 - 온라인 개발 수업 및 멘토링 &amp; 게임 발표회</li>
                    <li>2020.01 ~ 2021.05</li>
                    <br/>
                    카투사 (KATUSA)
                    <li className='lang-kr'>S1 인사과: 작업 프로세스 자동화</li>
                    <li>2021.06 ~ 2022.12</li>
                    </span>
                </div>
                <div id="skills">
                    <h3 className="subhead">Certification</h3>
                    <span className='lang-kr'>
                        SQL 개발자 (SQLD)
                        <li>2023.04</li>
                    </span>
                    <h3 className="subhead">Technical Skills</h3>
                    <span className='lang-kr'>
                        중급 (짧은 실무 경험)
                        <li>Unity Engine</li>
                        <li>C#</li>
                        <br/>
                        초급 (개인 프로젝트 경험)
                        <li>React.js, Express.js, Node.js, MongoDB</li>
                        <li>Unreal Engine, Blender 3D</li>
                        <li>C, C++, JavaScript, Python</li>
                    </span>
                    <h3 className="subhead">Language</h3>
                    <span className='lang-kr'>
                        한국어
                        <li className='lang-kr'>원어민</li>
                        <br/>
                        영어
                        <li className='lang-kr'>고급 (C1)</li>
                        <li className='lang-kr'>업무 의사소통 가능</li>
                        <li>GRE V:153 Q:169 AW:3.0</li>
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

export default ResumeKRPage;

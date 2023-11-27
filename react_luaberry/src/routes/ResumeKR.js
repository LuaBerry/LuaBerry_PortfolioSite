import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../css/resumeStyle.css';

const ResumeKR = () => {
    return (
        <section className='resume'>
            <Sidebar />
            <article className="contents">
                <div id="name">
                    <div className="bg">
                        <h1>여정인</h1>
                        <hr />
                        <h3>한양대학교 학부생</h3>
                    </div>
                </div>
                <Link to="/resume">
                    <small>For English version →</small>
                </Link>
                <div id="personal_info">
                    <h3 className="subhead">About Me</h3>
                    <span>
                        한양대학교 <span className="accent">컴퓨터 소프트웨어 학부</span> 2학년생 입니다.
                        <br />
                        제 시야를 넓히고 개발 기술을 연마할 기회를 찾고 있습니다.
                    </span>
                </div>
                <div id="education">
                    <h3 className="subhead">Education</h3>
                    <span>
                        한양대학교 학부생
                        <ul>
                            <li>컴퓨터 소프트웨어학부</li>
                            <li>학점 3.5/4.5 (90.0/100)</li>
                        </ul>
                    </span>
                </div>
                <div id="experience">
                    <h3 className="subhead">Experience</h3>
                    <span>
                    오파츠 OOPArts
                        <ul>
                            <li>게임 개발 동아리 <span className="accent">회장</span></li>
                            <li>코로나 상황 대응 - 온래안 개발 수업 및 멘토링 &amp; 게임 발표회</li>
                            <li>2020~2021</li>
                    게임 외주 개발: "Hidden World"
                            <li>AR 네비게이션 &amp; 해양 생물 모델등을 제공하는 유니티 해양관광 앱</li>
                            <li>애니메이션, AR, 최적화</li>
                            <li>2020.11~2021.01</li>
                    카투사 (KATUSA)
                            <li>2021.06 - 2022.12</li>
                        </ul>
                    </span>
                </div>
                <div id="skills">
                    <h3 className="subhead">Certification</h3>
                    <span>
                        토익 TOEIC
                        <ul>
                            <li>2020.07</li>
                            <li>950/990</li>
                        </ul>
                        SQL 개발자 (SQLD)
                        <ul>
                            <li>SQL Developer</li>
                            <li>2023.04</li>
                        </ul>
                    </span>
                    <h3 className="subhead">Technical Skills</h3>
                    <span>
                        중급
                        <ul>
                            <li>C#</li>
                            <li>Python</li>
                        </ul>
                        초급
                        <ul>
                            <li>C, C++</li>
                            <li>JavaScript</li>
                            <li>SQL</li>
                        </ul>
                    </span>
                    <h3 className="subhead">Language</h3>
                    <span>
                        한국어
                        <ul>
                            <li>원어민</li>
                        </ul>
                        영어
                        <ul>
                            <li>고급 (B2~C1)</li>
                            <li>제한적으로 업무 의사소통 가능</li>
                        </ul>
                        일본어
                        <ul>
                            <li>초급 (A2)</li>
                            <li>단독 여행 가능</li>
                        </ul>
                        프랑스어
                        <ul>
                            <li>Beginner (A1)</li>
                            <li>기초 의사소통 가능</li>
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

export default ResumeKR;

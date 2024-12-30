import React from 'react';
import Sidebar from '../components/Sidebar';
import '../scss/resumeStyle.scss';


const ResumePage = ({lang}) => {
    if(lang == 0) {
        return Resume();
    } else {
        return ResumeKR();
    }
}

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
                <hr className="titleLine"/>
                <div className="bodygroup" id="about_me">
                    <h3 className="subhead">About Me</h3>
                    <div className="profile">
                        <div className="profile_outline">
                            <img src="assets/img/profile3.webp" alt="Profile" />
                        </div>
                    </div>
                    <p>
                    My name is Jeongin Yeo. I am senior student majoring computer science in Hanyang University.
                    Through my military service with the US Army, my dream has became "Living in the America".
                    So I've decided to find promising and competitive CS fields.
                    After the discharge, My focus has been on the system architectures and cloud service.
                    Since then, I am studying system development and preparing for the US grads school.
                    </p>
                </div>
                <div className="bodygroup" id="experience">
                    <h3 className="subhead">I am...</h3>
                    <p>
                        Undergraduate Researcher, HYU System Security Lab 
                        <br/>
                        Former President, HYU Game Dev club "OOPArts"
                        <br/>
                        Former S1 Clerk, KATUSA
                        <br/>
                        Founder, High school Computer club "컴맹전기"
                        <br/>
                        Guild Founder, LostArk "나란히"
                        <br/>
                    </p>
                </div>
                <div className="bodygroup" id="skills">
                    <h3 className="subhead">I can use...</h3>
                    <p>
                        Developing Tools
                        <li>Unity Engine, Unreal Engine, Blender 3D</li>
                        <li>React.js, Pug, Express.js, Node.js, MongoDB</li>
                        Programming Language
                        <li>C, C++</li>
                        <li>C#, JavaScript, Python</li>
                        Language
                        <li>Korean, English, Japanese</li>
                    </p>
                </div>
                <div className="bodygroup" id="CV">
                    <a href=""><h3 className="subhead">Download CV</h3></a>
                </div>
                
                <br/>
                <br/>
                <br/>
            </article>
        </section>
    );
};

const ResumeKR = () => {
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
                <hr className="titleLine"/>
                <div className="bodygroup" id="personal_info">
                    <h3 className="subhead">About Me</h3>
                    <span className='lang-kr'>
                    저는 여정인 입니다. 현재 한양대학교 컴퓨터소프트웨어학부에 4학년으로 재학중입니다.
                   	카투사의 복무 경험으로, 제 꿈은 "미국에서 사는 것" 이 되었습니다.
                    그래서 전도유망하고 경쟁력 있는 컴퓨터 공학 분야를 찾아가기로 결심했습니다.
                    전역 후, 저는 시스템 아키텍쳐와 클라우드 서비스에 관심을 가지게 되었습니다.
                    그 후로, 저는 시스템 개발을 공부하며 미국 석사를 준비하고 있습니다.
                    </span>
                </div>
                <div className="bodygroup" id="experience">
                    <h3 className="subhead">I am ...</h3>
                    <p>
                        한양대학교 시스템 보안 연구실, 학부연구생
                        <br/>
                        한양대학교 게임 개발 동아리 "OOPArts", 전 회장
                        <br/>
                        KATUSA, 전 S1 인사계원
                        <br/>
                        고등학교 컴퓨터 동아리 "컴맹전기", 초대 회장
                        <br/>
                        로스트아크 길드 "나란히", 창립 길드 마스터
                        <br/>
                    </p>
                </div>
                <div className="bodygroup" id="skills">
                    <h3 className="subhead">I can use ...</h3>
                    <p>
                        개발 도구들
                        <li>Unity Engine, Unreal Engine, Blender 3D</li>
                        <li>React.js, Pug, Express.js, Node.js, MongoDB</li>
                        프로그래밍 언어들
                        <li>C, C++</li>
                        <li>C#, JavaScript, Python</li>
                        언어들
                        <li>한국어, 영어, 일본어</li>
                    </p>
                </div>
                <div className="bodygroup" id="CV">
                    <a href=""><h3 className="subhead">Download Resume</h3></a>
                </div>
                {/* <div className="bodygroup" id="references">
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

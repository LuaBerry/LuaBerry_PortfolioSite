import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/resumeStyle.css';

const ResumePage = () => {
    return (
        <section className='resume'>
            <Sidebar />
            <article className="contents">
                <div id="name">
                    <div className="bg">
                        <h1 className='lang-kr'>한상희</h1>
                        <hr />
                        <h3 className='lang-kr'>한양대학교 학부생</h3>
                    </div>
                </div>
                <hr className="titleLine"/>
                <div id="personal_info">
                    <h3 className="subhead">About Me</h3>
                    <span className='lang-kr'>
                        한양대학교 <span className="accent lang-kr">응용미술교육과</span> 4학년생 입니다.
                        <br />
                        자기소개ㅐㅐㅐ
                    </span>
                </div>
                <div id="education">
                    <h3 className="subhead">Education</h3>
                    <span className='lang-kr'>
                        한양대학교 학부생
                        <li className='lang-kr'>응용미술교육과</li>
                        <li className='lang-kr'>학점??</li>
                    </span>
                </div>
                <div id="experience">
                    <h3 className="subhead">Experience</h3>
                    <span className='lang-kr'>
                    <li className='lang-kr'>비디오몬스터 장애인식개선 V-Change 영상공모전 수상</li>
                    <li>2021.06 ~</li>
                    <br/>
                    <li className='lang-kr'>위례동 송파 키움센터 교육봉사 활동</li>
                    <li>2022.11 ~ 2023.2</li>
                    <br/>
                    <li className='lang-kr'>여름방학 Math in cafe 게임 개발 프로젝트 디자인 총괄</li>
                    <li>2023.06 ~ 2023.08</li>
                    <br/>
                    </span>
                </div>
                <div id="skills">
                    <h3 className="subhead">Certification</h3>
                    <span className='lang-kr'>
                        토익 (TOEIC)
                        <li>2020.07</li>
                        <li>950/990</li>
                        <br/>
                    </span>
                    <h3 className="subhead">Technical Skills</h3>
                    <span>
                        Planning
                        <li className='lang-kr'>서비스 기획 디자인</li>
                        <li className='lang-kr'>콘텐츠 기획</li>
                        <li className='lang-kr'>UI/UX 설계</li>
                        <li className='lang-kr'>게임 개발</li>
                        <br/>
                        Creative
                        <li>Adobe AI</li>
                        <li>Adobe XD</li>
                        <li className='lang-kr'>클립 스튜디오</li>
                        <br/>
                        Tools
                        <li className='lang-kr'>피그마</li>
                        <li className='lang-kr'>노션</li>
                        <br/>
                    </span>
                    {/* <h3 className="subhead">Language</h3>
                    <span className='lang-kr'>
                        한국어
                        <li className='lang-kr'>원어민</li>
                        <br/>
                        영어
                        <li className='lang-kr'>고급 (C1)</li>
                        <li className='lang-kr'>업무 의사소통 가능</li>
                        <br/>
                        일본어
                        <li className='lang-kr'>초급 (A2)</li>
                        <li className='lang-kr'>여행 가능</li>
                        <br/>
                        프랑스어
                        <li className='lang-kr'>초보 (A1)</li>
                        <li className='lang-kr'>기초 의사소통 가능</li>
                    </span> */}
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

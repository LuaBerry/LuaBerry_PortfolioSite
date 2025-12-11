import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../scss/aboutStyle.scss';

const ResumePage = ({lang}) => {
    useEffect(() => {
        document.body.classList.add('has-fixed-bg');
        const img_url = new URL('/assets/img/margarete.jpg', window.location.origin).href;
        document.documentElement.style.setProperty('--bg-img', `url('${img_url}')`);
        document.documentElement.style.setProperty('--bg-pos', '86% 0%');
        document.documentElement.style.setProperty('--blur', '4px');
        return () => {
        document.body.classList.remove('has-fixed-bg');
        };
    }, []);

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
                        <h1>LEO YEO</h1>
                        <hr />
                        <h3>Hanyang University Student</h3>
                    </div>
                </div>
                <div className="bodygroup" id="about_me">
                    <h3 className="subhead">About Me</h3>
                    <div className="profile">
                        <div className="profile_outline">
                            <img src="assets/img/profile3.webp" alt="Profile" />
                        </div>
                    </div>
                    <p>
                    {/* Who are you, What's your interest, Why you like it, What you doing for it. */}
                    My name is Leo (Jeongin) Yeo. I am a senior student majoring in Computer Science and an undergraduate researcher in the <a href="https://syssec.hanyang.ac.kr/" target="_blank" rel="noopener noreferrer"><u>System Security Lab</u></a> at Hanyang University.<br/><br/>
                    Studying as an undergraduate researcher, I have developed a strong interest in Linux kernel programming and virtualization technology.<br/><br/>
                    Currently, I am conducting research on Confidential VM under the supervision of Prof. Youngpil Cho,
                    and I plan to pursue graduate studies in a kernel related field after graduation.
                    </p>
                </div>
                <div className="bodygroup" id="CV">
                    <a href="/assets/file/Leo_CV.pdf" id="cvlink" download>
                        <h3><FontAwesomeIcon icon={faDownload}/>Download CV</h3>
                    </a>
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
                <div className="bodygroup" id="about_me">
                    <h3 className="subhead">About Me</h3>
                    <div className="profile">
                        <div className="profile_outline">
                            <img src="assets/img/profile3.webp" alt="Profile" />
                        </div>
                    </div>
                    <p className='lang-kr'>
                    {/* Who are you, What's your interest, Why you like it, What you doing for it. */}
                    저는 한양대학교 컴퓨터소프트웨어학부 4학년생이자 <a href="https://syssec.hanyang.ac.kr/" target="_blank" rel="noopener noreferrer"><u>시스템 보안 연구실</u></a> 학부연구생 여정인입니다.<br/><br/>
                   	학부연구생을 진행하면서, 리눅스 커널 프로그래밍과 가상화 기술에 관심을 가지게 되었습니다.<br/><br/>
                    현재, 조영필 교수님의 지도 하에 학부연구생으로 Confidential VM을 연구하고 있으며,
                    졸업 후에는 커널 관련 분야의 대학원 진학을 계획하고 있습니다.
                    </p>
                </div>
                <div className="bodygroup" id="CV">
                    <a href="/assets/file/Leo_CV.pdf" id="cvlink" download>
                        <h3><FontAwesomeIcon icon={faDownload}/>Download Resume</h3>
                    </a>
                </div>
                <br/>
                <br/>
                <br/>
            </article>
        </section>
    );
};

export default ResumePage;

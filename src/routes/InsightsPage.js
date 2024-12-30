import React from 'react';
import Sidebar from '../components/Sidebar';
import '../scss/resumeStyle.scss';

const InsightsPage = ({lang}) => {
    if (lang == 0) return FAQ();
    else return FAQKR();
};

const FAQ = () => {
    return (
    <section className='resume'>
            <Sidebar />
            <article className="contents">
                {/* about this website */}
                <div className="bodygroup">
                    <h3 className="subhead">What is this website? Why did you built it?</h3>
                    <span>
                        Learning web dev, portfolio website, can be expended as CS blog at the future.
                    </span>
                </div>
                <div className="bodygroup">
                    <h3 className="subhead">What did you use?</h3>
                    <span>
                        Node.js, React.js, Express.js, MongoDB
                    </span>
                </div>
                <div className="bodygroup">
                    <h3 className="subhead">I want to make one of these</h3>
                    <span>
                        Nomadcoder, Fireship, or contact me via email.
                    </span>
                </div>
                {/* about me */}
                <div className="bodygroup">
                    <h3 className="subhead">You seem to have decent experience in Webdev & game dev, why did you choose system?</h3>
                    <span>
                        didn't like professional experience, many company requires fast dev not engineering virtue.
                    </span>
                </div>
                <br/><br/>
            </article>
        </section>
    );
};

const FAQKR = () => {
    return(
    <section className='resume'>
            <Sidebar />
            <article className="contents">
                {/* about this website */}
                <div className="bodygroup">
                    <h3 className="subhead">그래서 이거 뭐임? 왜만듬?</h3>
                    <span>
                        웹개발 공부용으로 만든 포폴 사이트. 전공 수업 정리한거 추가할수도 있음.
                    </span>
                </div>
                <div className="bodygroup">
                    <h3 className="subhead">뭘로 만듬?</h3>
                    <span>
                        Node.js, React.js, Express.js, MongoDB
                    </span>
                </div>
                <div className="bodygroup">
                    <h3 className="subhead">나도 만들고 싶음</h3>
                    <span>
                        노마드코더, 생활코딩등 유튭 아니면 컨택 주셈
                    </span>
                </div>
                {/* about me */}
                <div className="bodygroup">
                    <h3 className="subhead">웹개발, 겜개발 꽤 한거같은데 왜 클라우드 시스템 함?</h3>
                    <span>
                        외주 경험이 맘에 안듦, 기업들이 공학적 우수성보다 빠른 템포 개발을 더 좋아했음.
                    </span>
                </div>
                <br/><br/>
            </article>
        </section>
    );
};

export default InsightsPage;

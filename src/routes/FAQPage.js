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
                    <h3 className="subhead">About this Website</h3>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
                    <span className='title'>What is this website? Why did you build it?</span>
                    <br/>
                    <p>
                        I built this website as a side project to practice full-stack web development.
                        It is essentially a portfolio website, but also a playground for me.
                        Primarily, I will use this website to share some academic information or showcase my side project.
                    </p>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
                    <span className='title'>What web stack did you use?</span>
                    <br/>
                    <span>
                        Currently, I am using MongoDB, Express.js, React.js, Node.js(MERN).
                    </span>
                    <br/>
                    <hr/>
                    <br/>
                    <span className='title'>I want to build something like this!</span>
                    <br/>
                    <p>
                        Nomadcoder (<a href="">Especially this paid course</a>), Fireship and ChatGPT was very helpful.
                        It's not hard as it seems. If you have any questions, feel free to email me!
                    </p>
                    <br/>
                    <hr/>
                    <br/>
                </div>
                {/* Vault request */}
                <div className="bodygroup">
                    <h3 className="subhead">About the Vault</h3>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
                    <span className='title'>Can you upload the class notes about [some course]? </span>
                    <br/>
                    <span>
                        Please send any request to my email. I will 
                    </span>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
                    <span className='title'>Can you help / share [some assignment]?</span>
                    <br/>
                    <p>
                        As I believe the significance of completing assignments on one's own, I will not help/share any assignment.
                        You can check stack overflow, blog and ponder the problem!
                        I will upload some exemple report to show you some format.
                    </p>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
                    <span className='title'>How can I contribute or fix the class notes?</span>
                    <br/>
                    <p>
                        Thank you for yout interest! Please send your suggestions or corrections via email. 
                        I will review and incorporate your feedback into the notes.
                        All contributers will be acknowledged in the note.
                    </p>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
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
            </article>
        </section>
    );
};

export default InsightsPage;

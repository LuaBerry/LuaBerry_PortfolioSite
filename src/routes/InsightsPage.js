import React from 'react';
import Sidebar from '../components/Sidebar';
import '../css/resumeStyle.css';

const InsightsPage = () => {
    return (
        <section className='resume'>
            <Sidebar />
            <article className="contents">
                <div id="interests">
                    <h3 className="subhead">Interests</h3>
                    <span>
                        I used to be a hardcore gamer but now I only play occasionally, although I still enjoy watching gameplays.<br/>
                        These days, I read books or watch documentaries on YouTube or Netflix.<br/>
                        I always have music playing - usually classical, but sometimes hip hop, EDM, or whatever trending.<br/>
                        I also like to party and cook for my friends. It's really rewarding when my friends find new flavors through my dishes.
                    </span>
                </div>
                <div id="passions">
                    <h3 className="subhead">Passions</h3>
                    <span>
                        I am an encyclopedic learner, eager to explore all kinds of new knowledge.<br/>
                        I am mainly intrigued by Physics, Astronomy, Philosophy, Theology, Medicine and Foreign languages.<br/>
                        I learn these things through YouTube videos, books and when necessary, academic papers.<br/>
                        I also enjoy sharing these knowledge with my friends and family. I get excited when I can correct psuedoscience or misconception.
                    </span>
                </div>
                <div id="motto">
                    <h3 className="subhead">Life Motto</h3>
                    <span>
                        My motto is: "Live like a child, with steadfastness and a sense of wonder."<br/>
                        Purity towards the humanity and the nature is what I value the most.<br/>
                    </span>
                </div>
                <div id="Favorites">
                    <h3 className="subhead">Favorites</h3>
                    <span>
                        <h4>Classical music</h4>
                        Composers:
                        <li>Claude Debussy</li>
                        <li>Pyotr Tchaikovsky</li>
                        <li>Maurice Ravel</li>
                        <li>J.S. Bach</li>
                        <li>W.A. Mozart</li>
                        Pieces:
                        <li><a href="https://youtu.be/Y9iDOt2WbjY?feature=shared&t=37" target="_blank" rel="noopener noreferrer">"Prelude: A l'apres midi d'une faune" by Debussy</a></li>
                        <li><a href="https://youtu.be/LcJBKZqb-68?feature=shared" target="_blank" rel="noopener noreferrer">"Goldberg Variations" by Bach</a></li>
                        <li><a href="https://youtu.be/n_yIgrkSNzE?feature=shared" target="_blank" rel="noopener noreferrer">"Gaspard de la nuit: Ondine" by Ravel</a></li>
                        <h4>Books</h4>
                        <li>Herztöne by Martin schlesche</li>
                        <li>Principles by Ray dalio</li>
                        <li>라틴어 수업 by 한동일</li>
                        <br/>
                    </span>
                    {/* <h3 className="subhead">Life Experiences</h3>
                    <span>
                        <a>Traveling japan</a><br/>
                        <a>My sister; The Frontier</a><br/>
                        <a>From atheist to catholic</a>
                    </span> */}
                </div>
                <br/><br/>
            </article>
        </section>
    );
};

export default InsightsPage;

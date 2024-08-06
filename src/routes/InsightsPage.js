import React from 'react';
import { Link } from 'react-router-dom';
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
                        I used to be a hardcore video gamer but now I mostly stick to playing short chess games, though I still enjoy watching gameplays.<br/>
                        These days, I spend most of my free time reading books or watching documentary style videos on YouTube or Netflix.<br/>
                        I always listen to music. Usually classical, but occasionally I enjoy hip hop, EDM, or whatever music is trending.<br/>
                        I also like to host parties whenever I have a good reason. I cook various dishes with my own twists. It's really rewarding when my friends experience new flavors through my dishes.
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
                        Purity towards humanity and nature is what I value the most.<br/>
                        Sadly, It tends to dissipate as we grow. We witness human cruelty, selfishness, detestability, and become habituated to the magic of nature. Those who maintain their purity may be seen as "naive and ignorant".<br/>
                        Despite those experiences and sarcasm they may bring, one must strive to preserve their purity.<br/>
                        It is the basis, the fuel, the virtue of a thriving human society, and the key to appreciating the beauty of life.
                    </span>
                </div>
                <div id="Favorites">
                    <h3 className="subhead">Favorites</h3>
                    <span>
                        <h4>Classical music</h4>
                        When I listen to classical music, I like to visualize the pieces. Each time I do, different images emerge. I think that's the true beauty of music.<br/>
                        I also cherish the pinnacle of instrumental technique, exemplified by the mastery of virtuosos like paganini.<br/>
                        My favorite composers are Debussy, Tchaikovsky, Ravel, Bach, Mozart.<br/>
                        And My favorite pieces are
                        <li>"Prelude: A l'apres midi d'une faune" by Debussy</li> 
                        <li>"Goldberg Variations" by Bach.</li>
                        <li>"Gaspard de la nuit: Ondine" by Ravel</li>
                        <h4>Cuisine</h4>
                        My signature dish is Braised pork jowl with Poutine mashed potatoes.<br/>
                        I prioritize aroma over taste. So I enjoy experimenting with Italian, Japanese cuisine.<br/>
                        But considering the taste-to-effort efficiency, American or Korean dishes are the best for parties.
                        <h4>Books</h4>
                        Herztöne by Martin schlesche - The best catholic book that led me back to the cathedrale.<br/>
                        Principles by Ray dalio - Personal development book that has profoundly shaped my disposition and impacted me the most.<br/>
                        라틴어 수업 by 한동일 - The first liberal arts book that truly impressed me, it helped me through a tough time during military boot camp.
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

import React, { useEffect, useRef, useState } from "react";
import '../css/homeStyle.css';
//pi < 21.99115 / 7 < pi + 0.0000003

const menuText = [
    "Resume", "Insights", "Projects", "Blog"
]

const HomePage = () => {
    const [frame, setFrame] = useState(0);
    const [menu, setMenu] = useState(0);
    const [curInter, setCurInter] = useState(null);

    const menuRef = useRef(menu);
    const curInterRef = useRef(curInter);

    useEffect(() => {
        menuRef.current = menu;
      }, [menu]);
    
    useEffect(() => {
    curInterRef.current = curInter;
    }, [curInter]);

    useEffect(()=> {
        const handleScroll = (event) => {
            event.preventDefault();
            if(curInterRef.current) return;
            setMenu((prevMenu) => {
                if(event.deltaY > 0) {
                    return (prevMenu < 3) ? prevMenu + 1 : 3
                } else {
                    return (prevMenu > 0) ? prevMenu - 1 : 0
                }
            })
            const interval = setInterval(() => {
                setFrame((prevFrame) => {
                    if(prevFrame === (menuRef.current * 12)) {
                        setCurInter(null);
                        clearInterval(interval);
                        return prevFrame;
                    } else {
                        return prevFrame + ((menuRef.current * 12 - prevFrame) >= 0 ? 1 : -1);
                    }
                });
            }, 40);
            setCurInter(interval);
        }
        window.addEventListener('wheel', handleScroll, {passive: false});
        return () => {
            window.removeEventListener('wheel', handleScroll);
        }
    }, []);
    return (
        (
            <section className="home">
                <img className="video" src={`/assets/anim/leojpg/${frame}.jpg`}/>
                <ul className="menu">
                    <li className={(menu === 0) ? "lightaccent" : "lightgray"}><a href='/resume'>Resume</a></li>
                    <li className={(menu === 1) ? "lightaccent" : "lightgray"}><a href='/insights'>Insights</a></li>
                    <li className={(menu === 2) ? "lightaccent" : "lightgray"}><a href='/projects'>Projects</a></li>
                    <li className={(menu === 3) ? "lightaccent" : "lightgray"}><a href='/blog'>Blog</a></li>
                </ul>
                <div className="overview">
                    <Overview menu={menu}/>
                </div>
            </section>
        )
    );
}

const Overview = ({menu}) => {
    if (menu == 0) return <ResumeOverview/>;
    else if (menu == 1) return <InsightsOverview/>;
    else if (menu == 2) return <ProjectsOverview/>;
    else if (menu == 3) return <BlogOverview/>;
}

const ResumeOverview = () => {
    return (
    <>
        <div className="resumeimg">
            <img src="assets/img/profile.webp">
            </img>
            <div className="overlay"/>
            <div className="text">
                <h1>LUABERRY</h1>
            </div>
        </div>
        <div className="resumeoverview">
            <div>
                <img></img>
                <span>Grade</span>
                <h1>Junior</h1>
            </div>
            <div>
                <img></img>
                <span>Interest</span>
                <h1>Cloud</h1>
            </div>
            <div>
                <img></img>
                <span>Weekly Commit</span>
                <h1>12</h1>
            </div>
        </div>
        <hr/>
        <div className="resumeoverview">
            <div>
                <span>Repositories</span>
                <h1>33</h1>
            </div>
            <div>
                <span>GPA</span>
                <h1>3.52/4.0</h1>
            </div>
            <div>
                <span>Further</span>
                <h1>Click Here</h1>
            </div>
        </div>
    </>
    )
}

const InsightsOverview = () => {
    return (
        <div className="insightsoverview">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

const ProjectsOverview = () => {
    return (
        <div className="projectsoverview">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

const BlogOverview = () => {
    return (
        <div className="blogoverview">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default HomePage;
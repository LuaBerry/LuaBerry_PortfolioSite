import React, { useEffect, useRef, useState } from "react";
import '../scss/homeStyle.scss';
//pi < 21.99115 / 7 < pi + 0.0000003

const menuText = [
    "resume", "insights", "projects", "blog"
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
        document.body.style.overflowX = "hidden";
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
        }
        window.addEventListener('wheel', handleScroll, {passive: false});
        return () => {
            window.removeEventListener('wheel', handleScroll);
            document.body.style.overflowX = "auto";
        }
    }, []);

    useEffect(()=> {
        const interval = setInterval(() => {
            setFrame((prevFrame) => {
                if(prevFrame === (menuRef.current * 10)) {
                    setCurInter(null);
                    clearInterval(interval);
                    return prevFrame;
                } else {
                    return prevFrame + ((menuRef.current * 10 - prevFrame) >= 0 ? 1 : -1);
                }
            });
        }, 30);
        setCurInter(interval);
        return () => clearInterval(interval); 
    }, [menu]);
    return (
        (
            <section className="home">
                <img className="video" src={`/assets/anim/leojpg/${frame}.jpg`}/>
                <ul className="menu">
                    <li><button onClick={()=>{setMenu(0);}} className={(menu === 0) 
                        ? "lightaccent" : "lightgray"}>Overview</button></li>
                    <li><button onClick={()=>{setMenu(1);}} className={(menu === 1) 
                        ? "lightaccent" : "lightgray"}>Link</button></li>
                </ul>
                <Overviews menu={menu} frame={frame}/>
            </section>
        )
    );
}

const Overviews = ({menu, frame}) => {
    return (
    <div className="overviews" style={{transform: `translate(calc(${(menu * -100)}vw + ${(menu * 30)}px))`}}>
        <ResumeUI></ResumeUI>
        <LinkUI></LinkUI>
    </div>
    )
}

const ResumeUI = () => {
    return (
    <div className="resumeui">
        <div className="resumeimg">
            <img src="assets/img/profile.webp">
            </img>
            <div className="overlay"/>
            <div className="text">
                <h1>LUABERRY</h1>
            </div>
        </div>
        <div className="resumesummary">
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
        <div className="resumesummary">
            <div>
                <span>Repositories</span>
                <h1>33</h1>
            </div>
            <div>
                <span>GPA</span>
                <h1>3.52/4.0</h1>
            </div>
            <div>
                <span>Resume</span>
                <h1>Download Here</h1>
            </div>
        </div>
        <a className="pagelink" href="/resume">
                <div><span>&rsaquo;</span></div>
                Click Here for detail &rarr;
        </a>
    </div>
    )
}

const InsightsUI = () => {
    return (
    <div className="insightsui">
        <div className="question">
            <h1>My Favorite classics are...</h1>
        </div>
        <hr/>
        <div className="answers">
            <h1>Prelude: A l'apres midi d'une faune</h1>
        </div>
    </div>
    )
}

const ProjectsUI = () => {
    return (
    <div className="projectsui">
        <img src="/assets/img/wetubeOpt.jpg?v=1"></img>
        <div className="overlay"></div>
        <div className="projecttype">
            <span className="web bar" style={{width:`calc(${4/5} * 100% - 20px)`}}>WEB</span>
            <span className="game bar" style={{width:`calc(${1/5} * 100% - 20px)`}}>GAME</span>
            {/* <span className="cloud bar" style={{width:`calc(${0/5} * 100% -60px)`}}>CLOUD</span> */}
        </div>
        <hr/>
        <div className="projecttype">
            {/* <span className="company bar" style={{width:`calc(${0/5} * 100%)`}}>COMPANY</span> */}
            <span className="commission bar" style={{width:`calc(${1/5} * 100% - 20px)`}}>COMMISSION</span>
            <span className="personal bar" style={{width:`calc(${4/5} * 100% - 20px)`}}>PERSONAL</span>
        </div>
    </div>
    )
}

const LinkUI = () => {
    return (
        <div className="linkui">
            <div>
                <img></img>
                <span>Blog</span>
                <h1>자기계발소</h1>
            </div>
            <div>
                <img></img>
                <span>YouTube</span>
                <h1>LUABERRY</h1>
            </div>
            <div>
                <span>Further</span>
                <h1>Click Here</h1>
            </div>
        </div>
    )
}

export default HomePage;
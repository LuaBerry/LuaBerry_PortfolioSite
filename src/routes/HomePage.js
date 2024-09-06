import React, { useEffect, useRef, useState } from "react";
import '../scss/homeStyle.scss';
import axios from "axios";
//pi < 21.99115 / 7 < pi + 0.0000003

const menuText = [
    "resume", "insights", "projects", "blog"
]

const HomePage = () => {
    const [frame, setFrame] = useState(0);
    const [menu, setMenu] = useState(0);
    const [curInter, setCurInter] = useState(null);

    const [commit, setCommit] = useState(0);
    const [repo, setRepo] = useState(0);
    const [codeTime, setCodeTime] = useState(0);

    const menuRef = useRef(menu);
    const curInterRef = useRef(curInter);

    useEffect(() => {
        menuRef.current = menu;
      }, [menu]);
    
    useEffect(() => {
    curInterRef.current = curInter;
    }, [curInter]);
    
    useEffect(() => {
        const getWaka = async () => {
            const {data} = await axios.get("https://wakatime.com/share/@a3466706-b60d-45c6-89e6-543fb0caf37f/f7304135-94b0-4569-9868-b9fd49d82b60.json");
            var minutes = 0;
            data.data.forEach(element => {
                minutes+= element.grand_total.minutes;
            });
            const hours = Math.ceil(minutes / 60.0);
            setCodeTime(hours);
        };
        const getCommit = async () => {
            var today = new Date();
            var weekago = new Date(today - (7 * 86400000));
            const {data} = await axios.get(`https://api.github.com/search/commits?q=author:LuaBerry+committer-date:${weekago.toISOString()}..${today.toISOString()}`);
            setCommit(data.total_count);
        }
        const getRepo = async () => {
            const {data} = await axios.get('https://api.github.com/users/LuaBerry/repos');
            setRepo(data.length);
        }
        getWaka();
        getCommit();
        getRepo();
    }, [])

    useEffect(()=> {
        document.body.style.overflowX = "hidden";
        const handleScroll = (event) => {
            event.preventDefault();
            if(curInterRef.current) return;
            setMenu(() => {
                return(event.deltaY > 0 ? 1 : 0)
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
                <div className="bgoverlay"/>
                <ul className="menu">
                    <li><button onClick={()=>{setMenu(0);}} className={(menu === 0) 
                        ? "lightaccent" : "lightgray"}>Overview</button></li>
                    <li><button onClick={()=>{setMenu(1);}} className={(menu === 1) 
                        ? "lightaccent" : "lightgray"}>Link</button></li>
                </ul>
                <div className="overviews" style={{transform: `translate(calc(${(menu * -100)}vw))`}}>
                    <ResumeUI codeTime={codeTime} commit={commit} repo={repo}></ResumeUI>
                    <LinkUI></LinkUI>
                </div>
            </section>
        )
    );
}

const ResumeUI = ({codeTime, commit, repo}) => {
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
                <h1>{commit}</h1>
            </div>
        </div>
        <hr/>
        <div className="resumesummary">
            <div>
                <span>Repositories</span>
                <h1>{repo}</h1>
            </div>
            <div>
                <span>GPA</span>
                <h1>3.52/4.0</h1>
            </div>
            <div>
                <span>Weekly Coding</span>
                <h1>{codeTime} Hour</h1>
            </div>
        </div>
        <a className="pagelink" href="/resume">
                <div><span>&rsaquo;</span></div>
                Click Here for detail &rarr;
        </a>
    </div>
    )
}

const LinkUI = () => {
    return (
        <div className="linkui">
            <div onClick={()=>{window.open('https://luaberry.tistory.com/')}}>
                <img src="/assets/img/tistory_logo.svg"></img>
                <span>Blog</span>
                <h1>자기계발소</h1>
            </div>
            <div onClick={()=>{window.open('https://www.youtube.com/@LuaB3rry')}}>
                <img src="/assets/img/youtube_logo.png"></img>
                <span>YouTube</span>
                <h1>LUABERRY</h1>
            </div>
        </div>
    )
}

export default HomePage;
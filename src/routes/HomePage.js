import React, { useEffect, useRef, useState } from "react";
import '../scss/homeStyle.scss';
import axios from "axios";
//pi < 21.99115 / 7 < pi + 0.0000003

const HomePage = () => {
    //For bg animation
    const [frame, setFrame] = useState(0);
    const [menu, setMenu] = useState(0);
    const [curInter, setCurInter] = useState(null);
    const imageCount = 15;
    //For realtime info
    const [commit, setCommit] = useState(0);
    const [repo, setRepo] = useState(0);
    const [codeTime, setCodeTime] = useState(0);
    //For bg animation
    const menuRef = useRef(menu);
    const curInterRef = useRef(curInter);

    //Sync menu, curInter
    useEffect(() => {
        menuRef.current = menu;
      }, [menu]);
    useEffect(() => {
    curInterRef.current = curInter;
    }, [curInter]);
    
    //Get real time info from Waka, Github
    useEffect(() => {
        const getWaka = async () => {
            const {data} = await axios.get(process.env.REACT_APP_WAKA_LINK);
            var minutes = 0;
            var hours = 0;
            data.data.forEach(element => {
                hours += element.grand_total.hours; 
                minutes += element.grand_total.minutes;
            });
            hours += Math.ceil(minutes / 60.0);
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

    //Handle scroll, touch event
    var startX = 0, startY = 0;
    const handleTouchStart = (event) => {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    }
    const handleTouchMove = (event) => {
        
        const diffX = event.touches[0].clientX - startX;
        const diffY = event.touches[0].clientY - startY;

        if(Math.abs(diffX) > Math.abs(diffY)) {
            event.preventDefault();
            if (diffX > 50)  setMenu(0);
            else if (diffX < -50) setMenu(1);
        }
    }
    const handleScroll = (event) => {
        event.preventDefault();
        if(curInterRef.current) return;
        setMenu(() => {
            return(event.deltaY > 0 ? 1 : 0)
        })
    }
    useEffect(()=> {
        document.body.style.overflowX = "hidden";
        window.addEventListener('wheel', handleScroll, {passive: false});
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove, {passive: false});
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            document.body.style.overflowX = "auto";
        }
    }, []);

    //Load image
    const preloadImage = (src) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
        }) 
    }
    useEffect(() => {
        window.onload = () => {
            preloadImage(`/assets/anim/leo50/${imageCount}.jpg`).then(() => {
                for (let i = 1; i < imageCount; i++) {
                    preloadImage(`/assets/anim/leo50/${i}.jpg`);
                }
            })
        }
    }, [])

    //BG animation
    useEffect(()=> {
        const interval = setInterval(() => {
            setFrame((prevFrame) => {
                if(prevFrame === (menuRef.current * imageCount)) {
                    setCurInter(null);
                    clearInterval(interval);
                    return prevFrame;
                } else {
                    return prevFrame + (((menuRef.current * imageCount) - prevFrame) >= 0 ? 1 : -1);
                }
            });
        }, 20);
        setCurInter(interval);
        return () => clearInterval(interval); 
    }, [menu]);

    return (   
        <section className="home">
            <img className="video" src={`/assets/anim/leo50/${frame}.jpg`} alt="background"/>
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
    );
}

const ResumeUI = ({codeTime, commit, repo}) => {
    return (
    <div className="resumeui">
        <div className="resumeimg">
            <img src="assets/img/profileLeo.jpg" alt="profile">
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
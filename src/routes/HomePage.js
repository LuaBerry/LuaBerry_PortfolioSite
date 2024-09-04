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
        console.log(`/assets/anim/${frame.toString().padStart(4, '0')}.png`);
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
    else if (menu == 2) return <projectsOverview/>;
    else if (menu == 3) return <BlogOverview/>;
}

const ResumeOverview = () => {
    <div className="resumeoverview">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

const InsightsOverview = () => {
    
}

const projectsOverview = () => {
    
}

const BlogOverview = () => {
    
}

export default HomePage;
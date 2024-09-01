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
            console.log(event.deltaY);
            setMenu((prevMenu) => {
                if(event.deltaY > 0) {
                    console.log("HERE!");
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
                <a className="menu" href={`/${menuText[menu].toLowerCase()}`}>{menuText[menu]}</a>
            </section>
        )
    );
}

export default HomePage;
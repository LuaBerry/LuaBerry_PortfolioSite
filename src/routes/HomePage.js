import React, { useEffect, useRef, useState } from "react";
import '../scss/homeStyle.scss';
import axios from "axios";
//pi < 21.99115 / 7 < pi + 0.0000003

const imageCount = 16;

const HomePage = () => {
    //For bg animation
    const [frame, setFrame] = useState(0);
    const [menu, setMenu] = useState(0);
    const [curInter, setCurInter] = useState(null);
    const [images, setImages] = useState([]);
    const [isTouch, setIsTouch] = useState(false);

    //For realtime info
    const [commit, setCommit] = useState(0);
    const [repo, setRepo] = useState(0);
    const [codeTime, setCodeTime] = useState(0);
    //For bg animation
    const canvasRef = useRef(null);
    const menuRef = useRef(menu);
    const curInterRef = useRef(curInter);
    const imagesRef = useRef([]);
    const frameRef = useRef(0);

    //Sync menu, curInter
    useEffect(() => {
        menuRef.current = menu;
      }, [menu]);
    useEffect(() => {
    curInterRef.current = curInter;
    }, [curInter]);
    useEffect(() => {
    imagesRef.current = images;
    }, [images]);
    useEffect(() => {
    frameRef.current = frame;
    }, [frame]);
    
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
        if (event.touches.length > 1) {
            event.preventDefault();
            return;
        }
        if(!isTouch) {
            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;
            setIsTouch(true);
        } else {
            event.preventDefault();
        }
    }
    const handleTouchMove = (event) => {
        
        const diffX = event.touches[0].clientX - startX;
        const diffY = event.touches[0].clientY - startY;
        if (event.touches.length > 1) {
            event.preventDefault();
            return;
        }
        if(Math.abs(diffX) > Math.abs(diffY)) {
            event.preventDefault();
            if (diffX > 50)  setMenu(0);
            else if (diffX < -50) setMenu(1);
        } else {
            document.body.scrollLeft=0;
        }
    }
    const handleTouchEnd = (event) => {
        setIsTouch(false);
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
        document.body.style.height = `${window.innerHeight}px`;
        document.body.style.overflowY = "auto";
        window.addEventListener('wheel', handleScroll, {passive: false});
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove, {passive: false});
        window.addEventListener('touchend', handleTouchEnd);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            document.body.style.overflowX = "auto";
        }
    }, []);

    //Load image
    const imageLoader = (arr, callback) => {
        var imgs = [];
        var loadedImages = 0;
        const imageLoaded = () => {
            loadedImages++;
            if (loadedImages >= arr.length) {
                callback(imgs);
            }
        }
        for (var i = 0; i < arr.length; i++) {
            const img = new Image();
            img.onload = imageLoaded;
            img.src = arr[i];
            imgs.push(img);
        }
    }
    //Canvas resizer
    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = document.documentElement.clientWidth;
            canvas.height = document.documentElement.clientHeight;
            drawCanvas(frameRef.current);
        }
    }
    useEffect(() => {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        const imageArray = Array.from({ length: imageCount }, (_, index) => `/assets/anim/leo50/${index}.jpg`);
        imageLoader(imageArray, (imgs) => {setImages(imgs); drawCanvas(frameRef.current);});
    }, [])
    //BG animation (Init)
    useEffect(() => {
        if (images.length > 0) {
            drawCanvas(frameRef.current);
        }
    }, [images]);
    //BG animation
    useEffect(()=> {
        const interval = setInterval(() => {
            setFrame((prevFrame) => {
                if(prevFrame === (menuRef.current * (imageCount - 1))) {
                    setCurInter(null);
                    clearInterval(interval);
                    return prevFrame;
                } else {
                    return prevFrame + (((menuRef.current * (imageCount - 1)) - prevFrame) >= 0 ? 1 : -1);
                }
            });
        }, 20);
        setCurInter(interval);
        return () => clearInterval(interval); 
    }, [menu]);
    const drawCanvas = (frame) => {
        const canvas = canvasRef.current;
        const images = imagesRef.current;
        if (!canvas || !images[frame]) {
            console.log(canvas, images, frame);
            return;
        }
        if(images.length === imageCount) {
            console.log(images[frame].complete);
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgWidth = images[frame].width;
            const imgHeight = images[frame].height;

            const canvasAspect = canvasWidth / canvasHeight;
            const imgAspect = imgWidth / imgHeight;

            let sx, sy, sWidth, sHeight;

            if (imgAspect > canvasAspect) {
                sHeight = imgHeight;
                sWidth = imgHeight * canvasAspect;
                sx = imgWidth - sWidth;
                sy = 0;
            } else {
                sWidth = imgWidth;
                sHeight = imgWidth / canvasAspect;
                sx = 0;
                sy = 0;
            }
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(images[frame], sx, sy, sWidth, sHeight, 0, 0, canvasWidth, canvasHeight);
        }
    }
    useEffect(() => {
        drawCanvas(frameRef.current);
    }, [frame]);

    return (   
        <section className="home">
            <canvas ref={canvasRef} width={"100vw"} height={"100vh"}></canvas>
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
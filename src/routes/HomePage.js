import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import '../scss/homeStyle.scss';
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
            const {data} = await axios.get("https://wakatime.com/share/@a3466706-b60d-45c6-89e6-543fb0caf37f/b3d47b8d-5a54-4de6-86f4-be99036231bd.json");
            const hours =  Math.round(data.data.grand_total.total_seconds_including_other_language / 3600);
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
        document.body.scrollLeft=0;
        document.body.scrollTop=0;
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
        document.body.scrollTop=0;
        document.body.scrollLeft=0;
        if (event.touches.length > 1) {
            event.preventDefault();
            return;
        }
        if(Math.abs(diffX) > Math.abs(diffY)) {
            event.preventDefault();
            if (diffX > 50)  setMenu(0);
            else if (diffX < -50) setMenu(1);
        }
    }
    const handleTouchEnd = (event) => {
        setIsTouch(false);
    }
    const handleScroll = (event) => {
        const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
        if(Math.abs(delta) > 30) {
            event.preventDefault();
            if(curInterRef.current) return;
            setMenu(() => {
                return(delta > 0 ? 1 : 0)
            })
        }
    }
    useEffect(()=> {
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";
        window.addEventListener('wheel', handleScroll, {passive: false});
        window.addEventListener('touchstart', handleTouchStart, {passive: false});
        window.addEventListener('touchmove', handleTouchMove, {passive: false});
        window.addEventListener('touchend', handleTouchEnd, {passive: false});
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
            return;
        }
        if(images.length === imageCount) {
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
    const [hover, setHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const timeRef = useRef(null);
    const updateMobile = () => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    }
    useEffect(() => {
        updateMobile();
        window.addEventListener('resize', updateMobile);
        return () => {window.removeEventListener('resize', updateMobile);}
    })
    
    return (
    <div className="resumeui">
        <div className="resumeimg">
            <img src="assets/img/profileLeo.jpg" alt="profile">
            </img>
            <div className="overlay"/>
            <div className="text">
                <h1>LuaBerry</h1>
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
                <h1>Cloud System</h1>
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
                <span>Repo</span>
                <h1>{repo}</h1>
            </div>
            <div>
                <span>GPA</span>
                <h1>3.52/4.0</h1>
            </div>
            <div>
                <span ref={timeRef} id="codeTime" onMouseOver={()=>{setHover(true);}}
                onMouseLeave={() => {setHover(false)}}>Coding Time* 
                </span>
                
                <Modal isOpen={hover} style={customStyles(timeRef.current, isMobile)} onRequestClose={()=>{setHover(false)}} >
                    From 2024 Sep
                </Modal>
                
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

const getElementPosition = (element, isMobile) => {
    if(!element) return {top: 0, left: 0, width: 0, height: 0};
    const rect = element.getBoundingClientRect();
    if (isMobile) return {
        top: rect.top + window.scrollY + 20,
        left: rect.left - 50,
        width: rect.width,
        height: rect.height
    }
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height
    };
};

const customStyles = (element, isMobile) => {
    const pos = getElementPosition(element, isMobile);
    return {
    content: {
      top: `${pos.top - pos.height}px`,
      left: `${pos.left + pos.width}px`,
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'transparent',
        pointerEvents: 'none',
    }
  };
}

const LinkUI = () => {
    return (
        <div className="linkui">
            <div onClick={()=>{window.open('https://blog.naver.com/luaberry')}}>
                <img src="/assets/img/naverblog_logo.png"></img>
                <span>Blog</span>
                <h1 className="lang-kr">개발자의 자기개발소</h1>
            </div>
            <div onClick={()=>{window.open('https://www.youtube.com/@LuaB3rry')}}>
                <img src="/assets/img/youtube_logo.png"></img>
                <span>YouTube</span>
                <h1 className="lang-kr">LUABERRY</h1>
            </div>
        </div>
    )
}


export default HomePage;
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import '../scss/homeStyle.scss';
//pi < 21.99115 / 7 < pi + 0.0000003

const imageCount = 31;

const HomePage = (lang) => {
    //For bg animation
    const [frame, setFrame] = useState(0);
    const [menu, setMenu] = useState(0);
    const [curInter, setCurInter] = useState(null);
    const [images, setImages] = useState([]);
    const [isTouch, setIsTouch] = useState(false);

    //For realtime info
    const [commit, setCommit] = useState(0);
    const [repos, setRepos] = useState(null);
    const [repoLength, setRepoLength] = useState(0);
    const [codeTime, setCodeTime] = useState(0);
    const [youtubeVideo, setYoutubeVideo] = useState({title: null, url: null});
    const [threadPost, setThreadPost] = useState({title: null, url: null});
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
            const {data: {hours}} = await axios.get("/api/waka");
            setCodeTime(hours);
        };
        const getGithub = async () => {
            const {data: {repo, commit}} = await axios.get("/api/github");
            setCommit(commit);
            setRepos(repo);
            setRepoLength(repo.length);
        }
        const getYoutube = async () => {
            const {data} = await axios.get("/api/youtube");
            setYoutubeVideo(data);
        }
        const getThread = async () => {
            const {data} = await axios.get("/api/thread");
            setThreadPost(data);
        }
        getYoutube();
        getThread();
        getWaka();
        getGithub();
    }, [])



    //Handle scroll, touch event
    var startX = 0, startY = 0;

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [])

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
            if(Math.abs(diffX) > 50) {
                if(curInterRef.current) return;
                setMenu((prevMenu) => {
                    const d = ((diffX > 0) ? -1 : 1);
                    let m = prevMenu + d;
                    if (m > 2) m = 2; else if (m < 0) m = 0;
                    return m;
                })
            }
        }
    }
    const handleTouchEnd = (event) => {
        xScrollLock();
        setIsTouch(false);
    }
    const handleScroll = (event) => {
        const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
        if(Math.abs(delta) > 30) {
            event.preventDefault();
            if(curInterRef.current) return;
            setMenu((prevMenu) => {
                const d = ((delta > 0) ? 1 : -1);
                let m = prevMenu + d;
                if (m > 2) m = 2; else if (m < 0) m = 0;
                return m;
            })
        }
    }

    const xScrollLock = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
    useEffect(()=> {
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";
        window.addEventListener('wheel', handleScroll, {passive: false});
        window.addEventListener('touchstart', handleTouchStart, {passive: false});
        window.addEventListener('touchmove', handleTouchMove, {passive: false});
        window.addEventListener('touchend', handleTouchEnd, {passive: false});
        window.addEventListener('scroll', xScrollLock);
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('scroll', xScrollLock);
            document.body.style.overflowX = "auto";
        }
    }, []);



    //Load image
    const imageLoader = (arr, callback) => {
        var imgs = [];
        var loadedImages = 0;
        const imageLoaded = () => {
            loadedImages++;
            if (loadedImages >= 16) { //arr.length) {
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
        const imageArray = Array.from({ length: imageCount }, (_, index) => `/assets/anim/leov2/${index.toString().padStart(4, '0')}.jpg`);
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
                if(prevFrame === (menuRef.current * 15)) {
                    setCurInter(null);
                    clearInterval(interval);
                    return prevFrame;
                } else {
                    return prevFrame + (((menuRef.current * 15) - prevFrame) >= 0 ? 1 : -1);
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
            <canvas ref={canvasRef}></canvas>
            <div className="bgoverlay"/>
            <ul className="menu">
                <li><button onClick={()=>{setMenu(0);}} className={(menu === 0) 
                    ? "lightaccent" : "lightgray"}>Overview</button></li>
                <li><button onClick={()=>{setMenu(1);}} className={(menu === 1) 
                    ? "lightaccent" : "lightgray"}>Activity</button></li>
                <li><button onClick={()=>{setMenu(2);}} className={(menu === 2) 
                    ? "lightaccent" : "lightgray"}>Link</button></li>
            </ul>
            <div className="overviews" style={{transform: `translate(calc(${(menu * -100)}vw))`}}>
                <ResumeUI codeTime={codeTime} commit={commit} repo={repoLength}></ResumeUI>
                <ActivityUI repos={repos} youtubeVideo={youtubeVideo} threadPost={threadPost}></ActivityUI>
                <LinkUI></LinkUI>
            </div>
        </section>
    );
}

const ResumeUI = ({codeTime, commit, repo}) => {
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
        <div id="resumeimg">
            <img src="assets/img/profileLeo.jpg" alt="profile">
            </img>
            <div className="overlay"/>
            <div className="text">
                <h1>Leo Yeo</h1>
            </div>
        </div>
        <div className="resumesummary">
            <div>
                <img></img>
                <span>Grade</span>
                <h1>Senior</h1>
            </div>
            <div>
                <img></img>
                <span>Interest</span>
                <h1>Kernel · Virtualization</h1>
            </div>
            <div>
                <span>Affiliation</span>
                <a className="external_link" href="https://sslab.hanyang.ac.kr" target="_blank" rel="noopener noreferrer"><h1>SSLab</h1></a>
            </div>
        </div>
        <hr/>
        <div className="resumesummary">
            <div>
                <span>Repo</span>
                <h1>{repo}</h1>
            </div>
            <div>
                <span>Current Research</span>
                <h1>Confidential VM</h1>
            </div>
            <div>
                <span ref={timeRef} id="codeTime">Coding Time
                </span>
                
                <h1>{codeTime} Hour</h1>

            </div>
        </div>
        {/* <a className="pagelink" href="/resume">
                <div><span>&rsaquo;</span></div>
                Click Here for detail
        </a> */}
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

const ActivityUI = ({repos, youtubeVideo, threadPost}) => {
    return (
        <div id="activityui">
            {(repos) ?
            (<div onClick={()=>{window.open(repos[0].html_url)}}>
                <img src="/assets/img/github_white_logo.png"></img>
                <div className="detailtext">
                    <span>Recent update</span>
                    <p>{repos[0].name}</p>
                </div>
            </div>) : (
                <></>
            )}
            <div onClick={()=>{window.open(youtubeVideo.url)}}>
                <img src="/assets/img/youtube_logo.png"></img>
                <div className="detailtext">
                    <span>Recent Upload</span>
                    <p>{youtubeVideo.title}</p>
                </div>
            </div>
            <div onClick={()=>{window.open(threadPost.url)}}>
                <img src="/assets/img/thread_logo.png"></img>
                <div className="detailtext">
                    <span>Recent Post</span>
                    <p>{threadPost.title}</p>
                </div>
            </div>
        </div>
    )
}

const LinkUI = ({}) => {
    return (
        <div id="linkui">
            <h2>Find Me On</h2>
            <div id="contactlinks">
                <img className="contact" src="/assets/img/gmail_logo.png" onClick={() => {window.location.href = "mailto:leo.yeo@luaberry.com"}}/>
                <img className="contact" src="/assets/img/github_white_logo.png" onClick={() => {window.open("https://github.com/LuaBerry")}}/>
                <img className="contact" src="/assets/img/linkedin_logo.png" onClick={() => {window.open("https://www.linkedin.com/in/leoyeo/")}}/>
                <img className="contact" src="/assets/img/youtube_logo.png" onClick={() => {window.open("https://www.youtube.com/@LuaB3rry")}}/>
            </div>
        </div>
    )
}

export default HomePage;
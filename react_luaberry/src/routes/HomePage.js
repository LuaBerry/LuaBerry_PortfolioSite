import React from "react";
import '../css/homeStyle.css';
//pi < 21.99115 / 7 < pi + 0.0000003
const HomePage = () => {
    return (
        (
            <section className="home">
                <video
                    autoPlay
                    loop
                    muted
                    playsinline
                    disablePictureInPicture="true"
                    poster="/assets/img/PR_vid_poster.webp">
                    <source src="/assets/video/PR_vid_opt.mp4" type="video/mp4" />
                </video>
                <div className='overlay' />
                <div className='home-content'>
                    <h1>LuaBerry</h1>
                </div>
                <div className='blank' />
            </section>
        )
    );
}

export default HomePage;
import React from "react";
import '../css/homeStyle.css';

class Home extends React.Component {
    render()
    {
        return (
        <section className="Home">
            <video 
                autoplay
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
    }
}

export default Home;
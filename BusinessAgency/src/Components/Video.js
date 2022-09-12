import React, { useRef } from 'react'
import '../css/video.css'

export default function Video() {
   const video = useRef(null);
   
   const btn = document.querySelector('.buttons button i');
  

   const playPause = ()=>{
    if(video.current.paused){
        video.current.play();
        btn.className = 'far fa-pause-circle'
        video.style.opacity = '.7'
    }
    else 
    {
        video.current.pause();
        btn.className = 'far fa-play-circle'
        video.style.opacity = '.3'
    }
   }

  

  return (
    <section className="section-2" id="about-us">
          <h1 className="section-heading">About Us</h1>
          <div className="section-heading-line"></div>
          <div className="video-wrapper">
            <video src="images/about-us-video.mp4" className="video" ref={video}></video>
            <div className="controls">
              <div className="video-bar-wrapper">
                <div className="video-bar"></div>
              </div>
              <div className="buttons">
                <button id="play-pause" onClick={playPause}>
                  <i className="far fa-play-circle"></i>
                </button>
              </div>
            </div>
          </div>
          <p className="section-2-paragraph">
            <i className="fas fa-quote-left"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus ipsum expedita perspiciatis unde repellat eligendi quisquam optio neque sint consequuntur, dolore delectus nisi eveniet nostrum explicabo. Quiarepellat, ut. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            <i className="fas fa-quote-right"></i>
          </p>      
        </section>
  )
}

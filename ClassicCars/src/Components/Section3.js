import React from 'react'
import '../css/section3.css'

export default function Section3(props) {

  
// Mouse Over function
  const mouseOver = (e)=>{
    e.target.play();
  }
  
  //Mouse Out Function 
  const mouseOut = (e)=>{
    e.target.pause();
  }
  return (
    //-- Section 3 --
    <div className="wrapper">
      <section className={`${props.isActive?'section-3 target change':'section-3 target'}`} id="video-gallery">
        <h1 className="section-heading">Video Gallery</h1>
        <div className="videos-wrapper center">
          <video src="images/car-video-1.mp4" muted loop className="video" onMouseOver={mouseOver} onMouseOut={mouseOut}></video>
          <video src="images/car-video-2.mp4" muted loop className="video" onMouseOver={mouseOver} onMouseOut={mouseOut}></video>
          <video src="images/car-video-3.mp4" muted loop className="video" onMouseOver={mouseOver} onMouseOut={mouseOut}></video>
        </div>
        <div className="videos-wrapper center">
          <video src="images/car-video-4.mp4" muted loop className="video" onMouseOver={mouseOver} onMouseOut={mouseOut}></video>
          <video src="images/car-video-5.mp4" muted loop className="video" onMouseOver={mouseOver} onMouseOut={mouseOut}></video>
          <video src="images/car-video-6.mp4" muted loop className="video" onMouseOver={mouseOver} onMouseOut={mouseOut}></video>
        </div>
      </section>
    </div>
    //-- End of Section 3 --
  )
}

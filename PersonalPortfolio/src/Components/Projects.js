import React from 'react'
import '../css/projects.css'


export default function Section3() {
  return (
    <section className="section-3" id="section-3">
        <h1 className="section-heading section-3-heading">My Projects</h1>
        <div className="projects-wrapper center">
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Food website</h2>
              <h4 className="project-technologies">HTML / CSS / REACTJS</h4>
            </div>
            <img src="images/food.png" className="project-img" alt=''/>
            <a
              href="#a"
              className="project-link"
              target="_blank" rel="noreferrer"
              >Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Wine Website</h2>
              <h4 className="project-technologies">ReactJS</h4>
            </div>
            <img src="images/wine.png" className="project-img" alt=''/>
            <a
              href="#a"
              className="project-link" >Go to Video</a>
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Road Website</h2>
              <h4 className="project-technologies">HTML / CSS / REACTJS</h4>
            </div>
            <img src="images/road.png" className="project-img" alt=''/>
            <a
              href="#a"
              className="project-link">Go to Video</a>
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Apple Website</h2>
              <h4 className="project-technologies">HTML / CSS / ReactJS</h4>
            </div>
            <img src="images/apple.png" className="project-img" alt=''/>
            <a
              href="#a"
              className="project-link">Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Paypal Website</h2>
              <h4 className="project-technologies">HTML / CSS / ReactJS</h4>
            </div>
            <img src="images/paypal.png" className="project-img" alt=''/>
            <a
              href="#a"
              className="project-link">Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Portfolio Website</h2>
              <h4 className="project-technologies">HTML / CSS / ReactJS</h4>
            </div>
            <img src="images/portfolio.png" className="project-img" alt=''/>
            <a
              href="#a"
              className="project-link">Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Creative Design </h2>
              <h4 className="project-technologies">HTML / CSS / REACTJS</h4>
            </div>
            <img src="images/creativedesign.png" className="project-img" alt=''/>
            <a
              href="#a"
              className="project-link">Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Business Agency </h2>
              <h4 className="project-technologies">HTML / CSS / REACTJS</h4>
            </div>
            <img src="images/marketing.png" className="project-img" alt=''/>
            <a
              href="#a"
              className="project-link">Go to Video</a
            >
          </div>
          <div className="project">
            <div className="project-text">
              <h2 className="project-name">Cars Website</h2>
              <h4 className="project-technologies">HTML / CSS / JS</h4>
            </div>
            <img src="images/cars.png" className="project-img" alt=''/>
            <a href="#a" className="project-link">Go to Video</a>
          </div>
        </div>
      </section>
  )
}

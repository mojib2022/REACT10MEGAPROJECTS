import React from 'react'
import '../css/home.css'


export default function Section1() {
  return (
   
    <section className="section-1 center" id="section-1">
        <h1 className="section-1-heading">
          Full Stack Software Engineer
        </h1>
        <img src="images/Mohammad-Rahman.jpeg" alt="John Smith" className="person-img" />
        <h3 className="person-name">Mohammad Rahman</h3>
        <a href="/projects" className="section-1-btn">Projects</a>
      </section>
      
  )
}

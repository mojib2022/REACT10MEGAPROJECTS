import React from 'react'
import '../css/section1.css'

export default function Section1(props) {
  return (
    //-- Section 1 --
    <div className="wrapper">
      <section className={`${props.isActive?'section-1 target center change':'section-1 target center'}`}/*"section-1 target center"*/ id="home">
        <h1 className="section-heading section-1-heading">Classic Cars</h1>
        <img src="images/car-section1.png" className="section-1-img" alt=""/>
      </section>
    </div>
    //-- End of Section 1 --
  )
}

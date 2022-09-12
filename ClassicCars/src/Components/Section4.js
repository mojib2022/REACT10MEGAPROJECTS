import React from 'react'
import '../css/section4.css'

export default function Section4(props) {
  return (
   //-- Section 4 --
    <div className="wrapper">
      <section className={`${props.isActive?'section-4 target change':'section-4 target'}`} id="image-gallery">
        <h1 className="section-heading">Image Gallery</h1>
        <div className="gallery center">
          <div className="gallery-shelf"></div>
          <img src="images/gallery-car-1.jpg" className="gallery-img-1" alt=""/>
          <img src="images/gallery-car-2.jpg" className="gallery-img-2" alt=""/>
          <img src="images/gallery-car-3.jpg" className="gallery-img-3" alt=""/>
        </div>
        <div className="gallery center">
          <div className="gallery-shelf"></div>
          <img src="images/gallery-car-4.jpg" className="gallery-img-1" alt=""/>
          <img src="images/gallery-car-5.jpg" className="gallery-img-2" alt=""/>
          <img src="images/gallery-car-6.jpg" className="gallery-img-3" alt=""/>
        </div>
      </section>
    </div>
    //-- End of Section 4 --

  )
}

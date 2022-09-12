import React from 'react'
import '../css/section2.css'

export default function Section2(props) {
  return (
    //Section 2 --
<div className="wrapper">
<section className={`${props.isActive?'section-2 target change':'section-2 target center'}`} id="popular-cars">
  <h1 className="section-heading">Popular Cars</h1>
  <div className="cards-wrapper center">
    <div className="card">
      <h2 className="car-name">Car Name</h2>
      <img src="images/car-1.jpg" className="card-img" alt=""/>
      <h3 className="car-price">$ 200,000</h3>
      <button type="button" className="card-btn">See More</button>
    </div>
    <div className="card">
      <h2 className="car-name">Car Name</h2>
      <img src="images/car-2.jpg" className="card-img" alt=""/>
      <h3 className="car-price">$ 100,000</h3>
      <button type="button" className="card-btn">See More</button>
    </div>
    <div className="card">
      <h2 className="car-name">Car Name</h2>
      <img src="images/car-3.jpg" className="card-img" alt=""/>
      <h3 className="car-price">$ 150,000</h3>
      <button type="button" className="card-btn">See More</button>
    </div>
  </div>
</section>
</div>
//-- End of Section 2 --
  )
}


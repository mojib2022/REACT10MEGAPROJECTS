import React from 'react'
import '../css/popularmeals.css'

export default function PopularMeals() {

  
  return (
    
    <section className="section-2">
    <h1 className="section-heading">popular meals</h1>
    <div className="cards-container">
        <div className="card">
            <img src="images/card-img-1.png" className="card-img" alt='img' />
            <h3 className="card-name">Fish</h3>
            <button className="card-btn">Order now</button>
        </div>
        <div className="card">
            <img src="images/card-img-2.png" className="card-img" alt='img'/>
            <h3 className="card-name">Cake</h3>
            <button className="card-btn">Order now</button>
        </div>
        <div className="card">
            <img src="images/card-img-3.png" className="card-img" alt='img'/>
            <h3 className="card-name">Lobster</h3>
            <button className="card-btn">Order now</button>
        </div>
    </div>
</section>

  )
}

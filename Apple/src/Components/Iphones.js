import React from 'react'
import '../css/iphones.css'

export default function Section2() {
  return (
    <section className="section-2" id="section-2">
            
            <h1 className="section-2-heading">iPhone 12</h1>

            <div className="iphones">
                <img src="images/iPhones/iphones-1-img.png" className="iphone-img-1" alt=""/>
                <img src="images/iPhones/iphones-2-img.png" className="iphone-img-2" alt=""/>
            </div>
            
            <div className="iphone-btns">
                <a href="#a" className="iphone-btn center"><span>Learn More</span></a>
                <a href="#a" className="iphone-btn center"><span>Shop</span></a>
            </div>
            
        </section>
  )
}

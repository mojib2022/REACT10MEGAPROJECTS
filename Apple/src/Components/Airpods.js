import React from 'react'
import '../css/airpods.css'

export default function Section5() {
  return (
    <section className="section-5 center" id="section-5">
            
            <div className="airpods">
              
                <h1 className="section-5-heading">AirPods</h1>
                <img src="images/AirPods/airpods-1.png" className="airpods-img-1" alt=""/>
                <img src="images/AirPods/airpods-2.png" className="airpods-img-2" alt=""/>
                
                <div className="airpods-buttons">
                    <button className="airpods-btn">Learn More</button>
                    <button className="airpods-btn">Buy</button>
                </div>
               
            </div>
           
        </section>
  )
}

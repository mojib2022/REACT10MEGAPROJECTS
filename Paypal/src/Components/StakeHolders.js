import React from 'react';


export default function Section2() {
  return (
    <>
    <section className="section-2">
                <h1 className="section-2-heading">PayPal is for everyone who pays or gets paid</h1>
                <div className="services">
                    <div className="service">
                        <i className="fas fa-user-tie"></i>
                        <h3 className="service-heading">Individuals</h3>
                        <p className="service-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, veritatis!</p>
                        <button className="service-btn">Learn More</button>
                    </div>
                    <div className="service">
                        <i className="fas fa-briefcase"></i>
                        <h3 className="service-heading">Businesses</h3>
                        <p className="service-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, veritatis!</p>
                        <button className="service-btn">Learn More</button>
                    </div>
                    <div className="service">
                        <i className="far fa-handshake"></i>
                        <h3 className="service-heading">Partners</h3>
                        <p className="service-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, veritatis!</p>
                        <button className="service-btn">Learn More</button>
                    </div>
                </div>
            </section>
             <section className="section-4">
             <h1 className="section-4-heading">Get started with PayPal.</h1>
             <div className="section-4-content">
                 <div className="section-4-img-wrapper">
                     <img src="images/macbook.png" alt=''/>
                 </div>
                 <ul className="section-4-list">
                     <li className="section-4-list-item">
                         <span className="number">1</span>
                         <span>Set up <a href="#a">a business account</a></span>
                     </li>
                     <li className="section-4-list-item">
                         <span className="number">2</span>
                         <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, esse?</span>
                     </li>
                     <li className="section-4-list-item">
                         <span className="number">3</span>
                         <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                     </li>
                 </ul>
             </div>
         </section>
         </>
  )
}

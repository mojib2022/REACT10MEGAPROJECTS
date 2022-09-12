import React, { useRef } from 'react'
import '../css/macbook.css'

export default function Section3() {

// Section 3
//Declaring variables
const section3ContentEl = useRef('')

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3ContentEl.current.offsetTop + section3ContentEl.current.offsetHeight / 2) {
        section3ContentEl.current.classList.add('change')
    }
    else{
        section3ContentEl.current.classList.remove('change')
    }
})
// End of Section 3

  return (
    <section className="section-3 center" id="section-3">
          
    <h1 className="section-3-heading">MacBook Air</h1>
 

    <div className="section-3-content center" ref={section3ContentEl}>
    
        <img src="images/MacBook/macbook-screen.png" className="macbook-img-1" alt='' />
        <img src="images/MacBook/macbook-keyboard.png" className="macbook-img-2" alt='' />
        <div className="loading-wrapper">
            <div className="loading center">
                <i className="fab fa-apple"></i>
                <div className="progress-bar"></div>
            </div>
        </div>
        
        <div className="macbook-info">
            <h2 className="macbook-info-heading">Light. Speed.</h2>
            <p className="macbook-price">Starting at $999</p>
            <button className="macbook-btn">Buy Now</button>
        </div>
        
    </div>
   
</section>
  )
}

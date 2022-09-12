import React, { useRef } from 'react'
import { useState } from 'react'
import '../css/watch.css'

export default function Section4() {
//Declaring Variables

  let [axisY,setAxisY] = useState(0)
  let [axisX,setAxisX] = useState(0)
  let [count,setCount] = useState(0)
  const watchBottomControlEl = useRef('')
  const watchTopControlEl = useRef('')
  const watchLeftControlEl = useRef('')
  const watchRightControlEl = useRef('')

//End of Declaring Variables

//Watch and watch bands hide controller 
  const hideControl = () => {
    if(axisY === -280) {
        watchTopControlEl.current.classList.add('hideControl')
    } else {
        watchTopControlEl.current.classList.remove('hideControl')
    }

    if(axisY === 280) {
        watchBottomControlEl.current.classList.add('hideControl')
    } else {
        watchBottomControlEl.current.classList.remove('hideControl')
    }

    if(count <= -3) {
        watchRightControlEl.current.classList.add('hideControl')
    } else {
        watchRightControlEl.current.classList.remove('hideControl')
    }

    if(count >= 3) {
        watchLeftControlEl.current.classList.add('hideControl')
    } else {
        watchLeftControlEl.current.classList.remove('hideControl')
    }
}
//End of Watch and watch bands hide controller

//Watch Controller
  const watchTopControl = ()=>{
    setAxisY(axisY-70)
    hideControl()
  }
  const watchBottomControl = ()=>{
    setAxisY(axisY+70)
    hideControl()
  }
  const watchLeftControl = ()=>{
    setAxisX(axisX+70)
    setCount(count+1)
    hideControl()
  }
  const watchRightControl = ()=>{
    setAxisX(axisX-70)
    setCount(count-1)
    hideControl()
  }
//End of watch controller


  return (
    <section className="section-4 center" id="section-4">
           
            <div className="watches center">
             
                <div className="watch-bands center" style={{marginRight:`${axisX}rem`}}>
                    <img src="images/watches/watch-band-1.jpg" className="watch-band-img" alt=""/>
                    <img src="images/watches/watch-band-2.jpg" className="watch-band-img" alt=""/>
                    <img src="images/watches/watch-band-3.jpg" className="watch-band-img" alt=""/>
                    <img src="images/watches/watch-band-4.jpg" className="watch-band-img" alt=""/>
                    <img src="images/watches/watch-band-5.jpg" className="watch-band-img" alt="" />
                    <img src="images/watches/watch-band-6.jpg" className="watch-band-img" alt=""/>
                    <img src="images/watches/watch-band-7.jpg" className="watch-band-img" alt=""/>
                    <img src="images/watches/watch-band-8.jpg" className="watch-band-img" alt=""/>
                    <img src="images/watches/watch-band-9.jpg" className="watch-band-img" alt=""/>
                </div>
                
                <div className="watch-cases center" style={{marginTop:`${axisY}rem`}}>
                    <img src="images/watches/watch-case-1.png" className="watch-case-img" alt="" />
                    <img src="images/watches/watch-case-2.png" className="watch-case-img" alt="" />
                    <img src="images/watches/watch-case-3.png" className="watch-case-img" alt="" />
                    <img src="images/watches/watch-case-4.png" className="watch-case-img" alt="" />
                    <img src="images/watches/watch-case-5.png" className="watch-case-img" alt="" />
                    <img src="images/watches/watch-case-6.png" className="watch-case-img" alt="" />
                    <img src="images/watches/watch-case-7.png" className="watch-case-img" alt="" />
                    <img src="images/watches/watch-case-8.png" className="watch-case-img" alt="" />
                    <img src="images/watches/watch-case-9.png" className="watch-case-img" alt="" />
                </div>
               
            </div>
            
            <a href="#a" className="watch-control watch-top-control center" ref ={ watchTopControlEl } onClick={watchTopControl}>
                <i className="fas fa-angle-up"></i>
            </a>
            <a href="#a" className="watch-control watch-right-control center" ref ={ watchRightControlEl } onClick={watchRightControl}>
                <i className="fas fa-angle-right"></i>
            </a>
            <a href="#a" className="watch-control watch-bottom-control center" ref ={ watchBottomControlEl } onClick={watchBottomControl}>
                <i className="fas fa-angle-down"></i>
            </a>
            <a href="#a" className="watch-control watch-left-control center" ref = { watchLeftControlEl } onClick={watchLeftControl}>
                <i className="fas fa-angle-left"></i>
            </a>
           


            <button className="watch-btn">Buy Now</button>
           
        </section>
        
  )
}

import { useState, useRef } from "react"
import '../css/home.css'


export default function Navigation() {
   //variable declarion
   let [x,setX] = useState(0)
   let [y,setY] = useState(0)
   let [z,setZ] = useState(0)
   const cubeEl = useRef(0)
  //End of Declaring variables
   
  //Iphone Box Control

  //Declaring variable 
  let [bool,setBool]= useState(true)
  //let interval
  
  const playPause = () => {
  
  const interval = setInterval(frame, 100);
  function frame() {
    if (!bool) {
      clearInterval(interval);
    } else {
        setY(y+1)
    }
  }}

playPause()

const mouseover = () => {
    setBool(false)
    playPause()
}

const mouseout = () => {
    setBool(true)
    playPause()
}
   //End of IPhone Box Control
   
   //Cube Controller
   const handleController = (arrow)=>{
        if(arrow === 'uparrow')
        {
            setX(x+20)
        }
        else if( arrow === 'downarrow'){
            setX(x-20)
        }
        else if(arrow === 'rightarrow')
        {
            setY(y+20)
        }
        else if(arrow === 'leftarrow')
        {
            setY(y-20)
        }
        else if( arrow === 'uparrowz')
        {
            setZ(z-20)
        }
        else if( arrow === 'downarrowz')
        {
            setZ(z+20)
        }
   }
   //End of Cube Controller

  return (
       <section className="section-1" id="section-1">
       
       <div className="cube-wrapper" onMouseOver={mouseover} onMouseOut={mouseout}>
                <div className="cube" ref = {cubeEl} style={{transform:`rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`}}>
                    <div className="front-side">
                        <img src="images/iphone.png" alt=""/>
                    </div>
                    <div className="back-side center">
                        <i className="fab fa-apple"></i>
                    </div>
                </div>

               
                <div className="controls">
                    <a href="#a" className="top-x-control" onClick={()=>handleController('uparrow')}>
                        <i className="fas fa-arrow-up "></i>
                    </a>
                    <a href="#a" className="bottom-x-control" onClick={()=>handleController('downarrow')}>
                        <i className="fas fa-arrow-down "></i>
                    </a>
                    <a href="#a" className="left-y-control" onClick={()=>handleController('leftarrow')}>
                        <i className="fas fa-arrow-left"></i>
                    </a>
                    <a href="#a" className="right-y-control" onClick={()=>handleController('rightarrow')}>
                        <i className="fas fa-arrow-right "></i>
                    </a>
                    <a href="#a" className="top-z-control" onClick={()=>handleController('uparrowz')}>
                        <i className="fas fa-arrow-down "></i>
                    </a>
                    <a href="#a" className="bottom-z-control" onClick={()=>handleController('downarrowz')}>
                        <i className="fas fa-arrow-up "></i>
                    </a>
                </div>
                
            </div>
           
            <div className="section-1-banner center">
                <h1>&#8592; Best Gift</h1>
                <p>"Creativity is just connecting things."</p>
                <span> - Steve Jobs</span>
                <button type="button">Buy Now</button>
            </div>
            <div className="slideshow"></div>
            
            
        </section>
       
        

  )
}

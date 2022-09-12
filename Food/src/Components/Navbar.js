
import { useState } from 'react';
import '../css/navbar.css'
import {Outlet} from "react-router-dom";



export default function Navbar() {
  //Declaring variables
  const[active,setactive]=useState(false)

  //Handling navigation click
  const clickHandler = ()=>
  {
    document.querySelectorAll('.target').forEach((item) => {
      setactive(!active)
    })
  }
  //End of Navigation click
  
  return (
    //<!-- Navbar  -->
    <>
    <nav className={active ? "navbar target change" : "navbar target"}>
        <a href='/' className="navbar-link">
            <i className="fas fa-home"></i>
            <span>Home</span>
        </a>
        <a href='popularmeals' className="navbar-link">
            <i className="fas fa-utensils"></i>
            <span>Meals</span>
        </a>
        <a href='burger' className="navbar-link">
            <i className="fas fa-hamburger"></i>
            <span>Burger</span>
        </a>
        <a href='pizza' className="navbar-link">
            <i className="fas fa-pizza-slice"></i>
            <span>Pizza</span>
        </a>
        <a href='contact' className="navbar-link">
            <i className="fas fa-blender-phone"></i>
            <span>Contact</span>
        </a>
       
    </nav>
    
    <div  className={active ? "menu target change" : "menu target"}onClick={clickHandler}></div>
    
    <Outlet />
    </>
    //<!-- End of Navbar  -->
  );
}



import React from 'react'
import '../css/navbar.css'
import { Outlet, Link } from "react-router-dom";

export default function NavBar(props) {
  return (
     //-- Navbar --
     <>     <nav className={`${props.isActive?'navbar target change':'navbar target'}`}>
     <a href="/" className="navbar-link">Home</a>
     <a href="/section2" className="navbar-link">Popular Cars</a>
     <a href="/section3" className="navbar-link">Video Gallery</a>
     <a href="/section4" className="navbar-link">Image Gallery</a>
     <a href="/section5" className="navbar-link">Contact</a>
   </nav>
   <Outlet />
   </>

   //-- End of Navbar --
  )
}

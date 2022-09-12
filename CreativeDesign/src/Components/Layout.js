import React from 'react'
import '../css/layout.css'
import { Outlet,Link } from "react-router-dom";

export default function Section1() {
  
  return (
    // Section 1
    <>
    <section className='section-1' id="home">
        <nav className='navbar'>
            <Link to="/" className="navbar-link">Design</Link>
            <Link to="customers" className="navbar-link">Customers</Link>
            <Link to="team" className="navbar-link">Team</Link>
            <Link to="contact" className="navbar-link">Contact</Link>
        </nav>
        <div className="floating-bg"></div>
        <h1 className="section-1-heading">Creative Design</h1>
        <div className="logo">
            <i className="fas fa-bezier-curve"></i>
        </div>
    </section>
    <Outlet />
    </>

    // End of Section 1 

  )
}

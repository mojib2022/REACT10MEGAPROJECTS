import React from 'react'
import { Outlet  } from 'react-router-dom'
import '../css/navigation.css'

function Home() {
     
  return (
    <>
    <section className="navigation" id="section-1">
    <a href="/" className="logo">
                <i className="fab fa-apple"></i>
            </a>
            <nav className="navbar">
                
                <a href="iphones" className="navbar-link">iPhone 12</a>
                <a href="macbook" className="navbar-link">MacBook Air</a>
                <a href="watches" className="navbar-link">Watch</a>
                <a href="airpods" className="navbar-link">AirPods</a>
            </nav>
    </section>
    <Outlet />
    </>
  )
}

export default Home
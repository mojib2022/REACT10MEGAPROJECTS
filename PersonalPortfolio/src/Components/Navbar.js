import React from 'react'
import { Outlet } from "react-router-dom"
import '../css/navbar.css'


export default function Navbar() {
  return (
    <>    <nav className="navbar center sticky">
        <a href="/" className="navbar-link">Home</a>
        <a href="about" className="navbar-link">About</a>
        <a href="projects" className="navbar-link">Portfolio</a>
        <a href="contact" className="navbar-link">Contact</a>
      </nav>
    <Outlet />
    </>

  )
}

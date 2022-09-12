import React from 'react'
import '../css/navbar.css'

export default function Navbar(props) {
  return (
    <div>
    <nav className={`${props.isActive?'navbar change':'navbar'}`}>
      <div className="navbar-logo">
        <a href="#a">
          <span>Ad</span>vanc<span>Modern</span>De<span>s</span>ign
        </a>
      </div>
      <div className="nav-list">
          <a href="/" className="nav-link">Home</a>
          <a href="/video" className="nav-link">Video</a>
          <a href="/contact" className="nav-link">Contact</a>
      </div>
    </nav>
    </div>
  )
}

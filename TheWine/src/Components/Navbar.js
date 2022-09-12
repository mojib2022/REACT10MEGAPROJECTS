import React, { useState } from 'react'


export default function Navbar() {
  const [isActive,setActive] = useState(false)
  const toggle = ()=>{
    setActive(!isActive)
  }

  return (
    <div className={`${isActive?'navbar change':'navbar'}`}>
        <a href="#a" className="logo-link">
          <img src="images/logo.png" alt="Logo" className="logo" />
        </a>

        <a href="#a" className='menu' onClick={toggle}>
          <div className="menu-line menu-line-1"></div>
          <div className="menu-line menu-line-2"></div>
          <div className="menu-line menu-line-3"></div>
        </a>

        <nav className="nav-list">
          <a href="#a" className="nav-link">Home</a>
          <a href="#a" className="nav-link">Vineyards</a>
          <a href="#a" className="nav-link">Grapes</a>
          <a href="#a" className="nav-link">Wine</a>
          <a href="#a" className="nav-link">Contact</a>
        </nav>
      </div>
  )
}

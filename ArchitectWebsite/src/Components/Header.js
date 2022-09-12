import React from 'react'
import '../css/header.css'

export default function Header() {
  return (
    <header className="header">
        <div className="img-wrapper">
          <img src="images/bg.jpg" alt=''/>
        </div>
        <div className="banner">
          <h1>Architecture & Interior Design</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Discover now</button>
        </div>
      </header>

  )
}

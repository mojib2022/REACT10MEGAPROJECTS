import React from 'react'
import '../css/header.css'
export default function Header() {
  return (
    <header className="header center">
    <div className="header-text">
      <h1 className="heading">Around the world</h1>
      <p className="header-paragraph">
        "Traveling - it leaves you speechless, then turns you into a
        storyteller"
      </p>
    </div>
    <img
      src="images/air-balloon.png"
      alt="HeaderImage"
      className="header-image"
    />
    <div className="logo">
      <h1>
        <span className="center">t</span>
        <span className="center">h</span>
        <span className="center">e</span>
        <span className="center">r</span>
        <span className="center">o</span>
        <span className="center">a</span>
        <span className="center">d</span>
      </h1>
    </div>
  </header>
  )
}

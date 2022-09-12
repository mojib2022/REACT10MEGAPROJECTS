import React from 'react'
import { Outlet } from "react-router-dom"
import '../css/sidebar.css'

export default function Sidebar() {
  return (
    <>
    <section className="sidebar">
        <ul className="menu">
          <li className="menu-item">
            <a href="/" className="menu-link" data-content="Home">Home</a>
          </li>
          <li className="menu-item">
            <a href="/about" className="menu-link" data-content="About Us">About Us</a>
          </li>
          <li className="menu-item">
            <a href="/team" className="menu-link" data-content="Team">Team</a>
          </li>
          <li className="menu-item">
            <a href="/contact" className="menu-link" data-content="Contact">Contact</a>
          </li>
        </ul>
        <div className="social-media">
          <a href="#a"><i className="fab fa-facebook-f"></i></a>
          <a href="#a"><i className="fab fa-instagram"></i></a>
          <a href="#a"><i className="fab fa-twitter"></i></a>
        </div>
      </section>
      <Outlet />
      </>
  )
}

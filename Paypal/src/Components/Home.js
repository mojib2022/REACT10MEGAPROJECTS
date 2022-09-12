import React from 'react'
import { Outlet } from 'react-router-dom'


export default function Section1(/*{handleLogoClick, handleLogin, handleSignup, isActiveFront,frontPage}*/) {
    
  return (
    <>
    <section className="section-1">
                <div className="navbar-wrapper">
                    <nav className="navbar">
                        <div className="menu">
                            <div className="menu-icon">
                                <div className="line line-1"></div>
                                <div className="line line-2"></div>
                                <div className="line line-3"></div>
                            </div>
                            <span>Menu</span>
                        </div>
                        <a href='/' className="navbar-logo logo">
                            <span className="p-1">P</span>
                            <span className="p-2">P</span>
                            PayPal
                        </a>
                        <ul className="nav-list">
                            <li className="nav-list-item dropdown-hover">
                                <a href="#a" className="nav-list-link show-dropdown">Personal <i className="fas fa-chevron-down"></i></a>
                                <ul className="nav-dropdown nav-dropdown-personal">
                                    <li className="nav-dropdown-item dropdown-heading">
                                        <a href="#a" className="dropdown-heading-link">
                                            <i className="fas fa-chevron-down"></i> Personal
                                        </a>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <a href="#a" className="nav-dropdown-link-1">How PayPal works</a>
                                        <a href="#a" className="nav-dropdown-link-2">What can you do with a personal account</a>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <a href="#a" className="nav-dropdown-link-1">Pay online</a>
                                        <a href="#a" className="nav-dropdown-link-2">Online payment without borders</a>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <a href="#a" className="nav-dropdown-link-1">Send payments</a>
                                        <a href="#a" className="nav-dropdown-link-2">Send payments abroad</a>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <a href="#a" className="nav-dropdown-link-1">Search for deals</a>
                                        <a href="#a" className="nav-dropdown-link-2">Pay with PayPal and send money</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-list-item dropdown-hover">
                                <a href="#a" className="nav-list-link show-dropdown">Business <i className="fas fa-chevron-down"></i></a>
                                <ul className="nav-dropdown nav-dropdown-business">
                                    <li className="nav-dropdown-item dropdown-heading">
                                        <a href="#a" className="dropdown-heading-link">
                                            <i className="fas fa-chevron-down"></i> Business
                                        </a>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <a href="#a" className="nav-dropdown-link-1">All business solutions</a>
                                        <a href="#a" className="nav-dropdown-link-2">See our range of products</a>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <a href="#a" className="nav-dropdown-link-1">Accept online payments</a>
                                        <a href="#a" className="nav-dropdown-link-2">Get paid on your website</a>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <a href="#a" className="nav-dropdown-link-1">Send invoices</a>
                                        <a href="#a" className="nav-dropdown-link-2">Create and email online invoices</a>
                                    </li>
                                    <li className="nav-dropdown-item">
                                        <a href="#a" className="nav-dropdown-link-1">Sell internationally</a>
                                        <a href="#a" className="nav-dropdown-link-2">PayPal supports your global growth</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-list-item">
                                <a href="#a" className="nav-list-link">Partners and Developers</a>
                            </li>
                        </ul>
                        <div className="navbar-buttons" >
                            <a href='login' className="navbar-btn login-btn login">
                            Login</a>
                            <a href='signup' className="navbar-btn signup-btn signup">
                            Signup</a>
                        </div>
                    </nav>
                </div>
                <div className="banner">
                    <h1 className="banner-heading">We've Got You Covered</h1>
                    <p className="banner-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit consequuntur, ex in est voluptatum odio sequi libero eius numquam repellendus quae quia, sed suscipit et!</p>
                    <button className="blue-btn">Learn More</button>
                </div>
            </section>
            <Outlet />
            </>


  )
}

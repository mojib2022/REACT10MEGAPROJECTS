import React from 'react'

export default function Section5({handleSignup}) {
  return (
    <section className="section-5">
    <div className="section-5-top">
        <h2 className="section-5-top-heading">Sign Up and Get Started</h2>
        <button className="blue-btn signup" onClick={handleSignup}>Get Started</button>
    </div>
    <footer className="footer">
        <div className="footer-top">
            <ul className="footer-list">
                <li>
                    <a href="#a">Help and Contact</a>
                </li>
                <li>
                    <a href="#a">Fees</a>
                </li>
                <li>
                    <a href="#a">Security</a>
                </li>
                <li>
                    <a href="#a">Features</a>
                </li>
                <li>
                    <a href="#a">Shop</a>
                </li>
            </ul>
            <ul className="footer-list">
                <li>
                    <a href="#a">English</a>
                </li>
                <li>
                    <a href="#a">Spanish</a>
                </li>
                <li>
                    <a href="#a">French</a>
                </li>
                <li>
                    <a href="#a">Italian</a>
                </li>
                <li>
                    <a href="#a">
                        <img src="images/flag.png" alt=""/>
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer-bottom">Code & Design By<br />
             Mohammad Rahman <br />
            <p className="copyright">Copyright &copy; All Rights Reserved</p>
        </div>
    </footer>
</section>

  )
}

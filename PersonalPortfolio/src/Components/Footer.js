import React from 'react'
import '../css/footer.css'


export default function Section5() {
  return (
    <footer className="section-5 center">
        <div className="social-media">
          <a href="#none" className="social-media-link">
            <i className="fab fa-github-square"></i>
          </a>
          <a href="#none" className="social-media-link">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#none" className="social-media-link">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="#none" className="social-media-link">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
        <p className="copyright">Code & Design By<br/>
        Mohammad Rahman<br />
          Copyright &copy; AdvanceModernDesign All Rights Reserved
        </p>
      </footer>
  )
}

import React from 'react'
import '../css/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-content">
          <p className="copyright">Design & Developed By Mohammad Rahman<br />
            Copyright &copy; 2020, AdvanceModernDesign - All Rights Reserved
          </p>
          <div className="social-list">
            <a href="#a"><i className="fab fa-facebook-f"></i></a>
            <a href="#a"><i className="fab fa-instagram"></i></a>
            <a href="#a"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
  )
}

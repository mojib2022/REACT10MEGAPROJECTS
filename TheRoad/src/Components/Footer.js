import React from 'react';
import '../css/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-list">
          <a href="/" className="footer-link" alt=''>Home</a>
          <a href="populartours" className="footer-link" alt=''>Tours</a>
          <a href="Stories" className="footer-link" alt=''>About Us</a>
          <a href="contact" className="footer-link" alt=''>Contact</a>
        </div>
        <p className="footer-paragraph">
          Design & Developed by Mohammad Rahman<br />
          Copyright &copy; AdvanceModernDesign All Rights Reserved
        </p>
      </footer>
  )
}

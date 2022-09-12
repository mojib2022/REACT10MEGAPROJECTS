import React from 'react'
import '../css/section5.css'


export default function Section5(props) {
  return (
    //-- Section 5 --
    <div className="wrapper">
      <section className={`${props.isActive?'section-5 target change':'section-5 target'}`} id="contact">
        <h1 className="section-heading">Contact Us</h1>
        <form className="contact-form">
          <input type="text" className="form-input" placeholder="Your Full Name" />
          <input type="email" className="form-input" placeholder="Your Email" />
          <textarea className="form-input" placeholder="Enter Message"></textarea>
          <input className="form-btn" type="submit" value="Submit" />
        </form>
        <p className="copyright">
          Copyright &copy; AdvanceModernDesign All Rights Reserved
        </p>
      </section>
    </div>
    //-- End of Section 5 --
  )
}

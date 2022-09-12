import React from 'react'
import '../css/contact.css'


export default function Section4() {
  return (
    
        <section className="section-4" id="contact">
            <h1 className="section-heading">Contact</h1>
            <div className="form-container">
                <img src="images/form-img.png" className="form-img" alt=''/>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <input type="submit" value="Send" />
                </form>
            </div>
           
        </section>
       
  )
}

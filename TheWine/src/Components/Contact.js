import React from 'react'


export default function Contact({section5wrapper}) {
  return (
    <section className="section-5">
          <div className="section-wrapper section-5-wrapper" ref={section5wrapper}>
            <ul className="footer-list">
              <li>Contact</li>
              <li>NY</li>
              <li>1039 Stanley Avenue</li>
              <li>Open Daily</li>
              <li>By appointment only</li>
            </ul>
            <img src="images/footer-img.png" className="footer-img" alt=""/>
            <ul className="footer-list">
              <li>Connect</li>
              <li>PN: 516-448-2763</li>
              <li>MN: 631-742-8400</li>
              <li>example@winehouse.com</li>
              <li>Join our mailing list</li>
            </ul>
            <p className="copyright">
              Copyright &copy; CodeAndCreate. All Rights Reserved
            </p>
          </div>
        </section>
  )
}

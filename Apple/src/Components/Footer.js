import React from 'react'
import '../css/footer.css'

export default function Section6() {
  return (
    <section className="section-6 center">
            <div className="section-6-icons">
                <a href="/" className="icon-link">
                    <img src="images/Icons/home-icon.png" alt='' />
                </a>
                <a href="/iphones" className="icon-link">
                    <img src="images/Icons/iphone-icon.png" alt='' />
                </a>
                <a href="/macbook" className="icon-link">
                    <img src="images/Icons/macbook-icon.png" alt='' />
                </a>
                <a href="/watches" className="icon-link">
                    <img src="images/Icons/watch-icon.png" alt='' />
                </a>
                <a href="/airpods" className="icon-link">
                    <img src="images/Icons/airpods-icon.png" alt='' />
                </a>
            </div>
            <p className="copyright">Copyright &copy; CodeAndCreate All Rights Reserved</p>
        </section>
       
  )
}

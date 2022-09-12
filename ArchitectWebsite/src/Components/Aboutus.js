import React from 'react'
import '../css/about.css'

export default function Aboutus() {
  return (
    <section className="about-us" id="aboutus">
        <div className="section-header">
          <h1 className="section-heading">About Us</h1>
          <div className="underline"></div>
        </div>
        <div className="services">
          <div className="service">
            <div className="service-header">
              <i className="fas fa-pen-nib"></i>
              <h3>Interior</h3>
            </div>
            <p className="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div className="service">
            <div className="service-header">
              <i className="fas fa-paint-roller"></i>
              <h3>Exterior</h3>
            </div>
            <p className="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div className="service">
            <div className="service-header">
              <i className="fas fa-pencil-alt"></i>
              <h3>Design</h3>
            </div>
            <p className="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div className="service">
            <div className="service-header">
              <i className="fas fa-paint-brush"></i>
              <h3>Decoration</h3>
            </div>
            <p className="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div className="service">
            <div className="service-header">
              <i className="fas fa-ruler-combined"></i>
              <h3>Planning</h3>
            </div>
            <p className="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div className="service">
            <div className="service-header">
              <i className="far fa-building"></i>
              <h3>Execution</h3>
            </div>
            <p className="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia! Necessitatibus delectus sed dicta corrupti
              voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
            </p>
          </div>
          <div className="about-us-img-wrapper">
            <img src="images/house.png" alt=''/>
          </div>
        </div>
      </section>
  )
}

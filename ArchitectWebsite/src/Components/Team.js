import React from 'react'
import '../css/team.css'
export default function Team() {
  return (
    <section className="team" id="team">
        <div className="section-header">
          <h1 className="section-heading">Our Team</h1>
          <div className="underline"></div>
        </div>
        <div className="cards-wrapper">
          <div className="card" data-tilt>
            <div className="card-img-wrapper">
              <img src="images/Mohammad-Rahman.jpeg" alt="CEO" />
            </div>
            <div className="card-info">
              <h2>Mohammad Rahman</h2>
              <h3>CEO</h3>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, impedit!"
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="card" data-tilt>
            <div className="card-img-wrapper">
              <img src="images/person-2.jpg" alt="Designer" />
            </div>
            <div className="card-info">
              <h2>Ann Brown</h2>
              <h3>Designer</h3>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, impedit!"
              </p>
              <button>Read More</button>
            </div>
          </div>
          <div className="card" data-tilt>
            <div className="card-img-wrapper">
              <img src="images/person-3.jpg" alt="Architect" />
            </div>
            <div className="card-info">
              <h2>Mary Doe</h2>
              <h3>Architect</h3>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, impedit!"
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </section>
  )
}

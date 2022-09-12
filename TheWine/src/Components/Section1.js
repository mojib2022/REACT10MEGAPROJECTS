import React from 'react'


export default function Section1({sw}) {
  return (
    <section className="section-1" >
          <div className="section-wrapper section-1-wrapper" ref={sw}>
            <div className="section-1-heading-wrapper">
              <h1 className="section-1-heading">The best wines around the world</h1>
            </div>
          </div>
        </section>
  )
}

import React from 'react'
import '../css/customer.css'


export default function Section2() {
   
  return (
    // Section 2
    <section className="section-2" id="customers">
        <h1 className="section-heading">Customers</h1>
        <div className="customers-wrapper">
            <div className="customer">
                <i className="fas fa-quote-left"></i>
                <p className="customer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa quisquam repellat atque, tempore assumenda vitae. Earum fuga a accusamus, nisi ullam delectus!</p>
                <div className="customer-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <img src="images/customer-img-1.jpg" className="customer-img" alt=""/>
                <h4 className="customer-name">Jane Lee</h4>
            </div>
            <div className="customer">
                <i className="fas fa-quote-left"></i>
                <p className="customer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa quisquam repellat atque, tempore assumenda vitae. Earum fuga a accusamus, nisi ullam delectus!</p>
                <div className="customer-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
                <img src="images/customer-img-2.jpg" className="customer-img" alt=""/>
                <h4 className="customer-name">Bob Smith</h4>
            </div>
            <div className="customer">
                <i className="fas fa-quote-left"></i>
                <p className="customer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam voluptatum accusantium pariatur, nulla quasi quibusdam ipsa quisquam repellat atque, tempore assumenda vitae. Earum fuga a accusamus, nisi ullam delectus!</p>
                <div className="customer-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <img src="images/customer-img-3.jpg" className="customer-img" alt=""/>
                <h4 className="customer-name">Ann Brown</h4>
            </div>
        </div>
    </section>
    // End of Section 2 
  )
}

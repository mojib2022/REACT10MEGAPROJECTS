import React from 'react'
import '../css/gallery.css'




export default function Gallery() {
    const link ='#';
   
  return (
  
   
    <section className="section-3">
        <h1 className="section-heading">Gallery</h1>
        <div className="gallery">
            <a href={link} className="gallery-link" title="Order Now">
                <img src="images/gallery-img-1.jpg" className="food-img" alt='' />
                <h3 className="food-name">Pancakes</h3>
                <p className="food-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    commodi possimus iure hic excepturi. Corporis!
                </p>
            </a>
            <a href={link} className="gallery-link" title="Order Now">
                <img src="images/gallery-img-2.jpg" className="food-img" alt='' />
                <h3 className="food-name">Cupcakes</h3>
                <p className="food-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    commodi possimus iure hic excepturi. Corporis!
                </p>
            </a>
            <a href={link} className="gallery-link" title="Order Now">
                <img src="images/gallery-img-3.jpg" className="food-img" alt='' />
                <h3 className="food-name">Hummus</h3>
                <p className="food-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    commodi possimus iure hic excepturi. Corporis!
                </p>
            </a>
            <a href={link} className="gallery-link" title="Order Now">
                <img src="images/gallery-img-4.jpg" className="food-img" alt=''/>
                <h3 className="food-name">Hamburger</h3>
                <p className="food-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    commodi possimus iure hic excepturi. Corporis!
                </p>
            </a>
            <a href={link} className="gallery-link" title="Order Now">
                <img src="images/gallery-img-5.jpg" className="food-img" alt='' />
                <h3 className="food-name">Salmon</h3>
                <p className="food-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    commodi possimus iure hic excepturi. Corporis!
                </p>
            </a>
            <a href={link} className="gallery-link" title="Order Now">
                <img src="images/gallery-img-6.jpg" className="food-img" alt='' />
                <h3 className="food-name">Vegetables</h3>
                <p className="food-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    commodi possimus iure hic excepturi. Corporis!
                </p>
            </a>
        </div>
    </section>
   

       

  )
}

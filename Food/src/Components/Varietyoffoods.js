import React, { useEffect } from 'react'
import '../css/varietyoffoods.css'

// Start of the Variety food Component
export default function Varietyoffoods() 
{
  
  // using useEffect hook
  useEffect(()=>{
    let i=0;

    // starting setInterval 

    setInterval(()=>{
      i++;  //incrementing variable i by 1

      //selecting all the icons and icon based on the search
      const icons = document.querySelectorAll('.section-1-icons i')
      const icon = document.querySelectorAll('.section-1-icons i.change')
      
      // removing classlist from i element
      icon[0].classList.remove('change')

      
      // conditionally removing or adding class list from the i element.
      if(i > 10){
       
        if(icons[icons.length-1].className === "fas fa-seedling change")
        {
            icons[icons.length-1].classList.remove('change')
        }
        icons[0].classList.add('change')

        i=0;

        console.log('Inside if and i = '+i)
      }
      else if(i < icons.length)
      {
        if(i===9)
        {
          if(icons[icons.length-1].className === "fas fa-seedling change")
          {
            icons[icons.length-1].classList.remove('change')
          }
          i=0;
          icons[i].classList.add('change')
          
        }
        else if(i < 9)
        {
          if(icons[icons.length-1].className === "fas fa-seedling change")
          {
            icons[icons.length-1].classList.remove('change')
          }
          icon[0].nextElementSibling.classList.add('change')
        }
      
    }
    },2000)

    //end of set interval
  },[])
  //end of use effetct

  

  // Returning JSX 
  return (
        <section className="section-1">
            <h1 className="section-heading">variety of foods</h1>
          <div className="section-1-icons">
              <i className="change fas fa-egg"></i>
              <i className="fas fa-stroopwafel"></i>
              <i className="fas fa-cheese"></i>
              <i className="fas fa-hotdog"></i>
              <i className="fas fa-drumstick-bite"></i>
              <i className="fas fa-apple-alt"></i>
              <i className="fas fa-ice-cream"></i>
              <i className="fas fa-fish"></i>
              <i className="fas fa-cookie"></i>
              <i className="fas fa-seedling"></i>
            </div>
            
        </section>
  )
  //end of returning JSX
}
// End of Variety food Component
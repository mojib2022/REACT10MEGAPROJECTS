import React from 'react'


export default function LeftRightButton({handleLeftButton,handleRightButton}) {
  return (
    <div>
        <button className="page-btn left-btn" onClick={handleLeftButton}>
        <img src="images/arrow.png" alt=""/>
        </button>
        <button className="page-btn right-btn" onClick={handleRightButton}>
            <img src="images/arrow.png"alt=""/>
        </button>
    </div>
  )
}

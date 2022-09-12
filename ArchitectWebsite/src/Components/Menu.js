import React from 'react'
import '../css/menu.css'

export default function Menu({isActive, handleChange}) {
  

  return (
    <div className={isActive?"hamburger-menu change":"hamburger-menu"} onClick={handleChange}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <span>Close</span>
      </div>
  )
}

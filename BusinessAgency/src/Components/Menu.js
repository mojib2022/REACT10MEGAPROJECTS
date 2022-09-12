import React from 'react'
import '../css/menu.css'

export default function Menu(props) {
  return (
      <div className={`${props.isActive?'menu change':'menu'}`} onClick = {props.toggle}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
       </div>
  )
}

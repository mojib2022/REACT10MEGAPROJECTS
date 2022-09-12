import React from 'react'


export default function Progress() {
  return (
    <div className="progress-wrapper">
        <div className="progress">
          <h2>1/5</h2>
        </div>
        <div className="circle-wrapper">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
        </div>
      </div>
  )
}

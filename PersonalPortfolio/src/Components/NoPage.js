import React from 'react'

function NoPage() {
  const styles = {
    color:"red",
    backgroundColor:"gray",
    width:"90vw",
    height:"80vh",
    fontSize:"5rem",
    position:'relative',
    margin:'10rem'
  }
  return (
    <div><p style={styles}>Page Not Found</p></div>
  )
}

export default NoPage
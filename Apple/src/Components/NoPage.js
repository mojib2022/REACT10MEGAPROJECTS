
import React from 'react'

function NoPage() {
 const styles = {
    color: 'red',
    width: '100vw',
    height:'100vh',
    backgroundColor: 'lightgray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
 }
  return (
    <div style={styles}><p>Page Not Found</p></div>
  )
}

export default NoPage
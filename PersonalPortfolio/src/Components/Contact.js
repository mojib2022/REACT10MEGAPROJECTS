import React, { useState } from 'react'
import '../css/contact.css'

export default function Section4() {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[message,setMessage] = useState('');

  const saveName = (e)=>{
    setName(e.target.value);
  }

  const saveEmail = (e)=>{
    setEmail(e.target.value);
  }

  const saveMessage = (e)=>{
    setMessage(e.target.value);
  }
  
  return (
    <section className="section-4" id="section-4">
        <h1 className="section-heading section-4-heading">Contact Me</h1>
        <form className="contact-form center">
          <input type="text" placeholder="Name" value={name} onChange={saveName}/>
          <input type="email" placeholder="Email" value={email} onChange={saveEmail}/>
          <textarea placeholder="Message" value={message} onChange={saveMessage}></textarea>
          <input type="submit" value="Submit" className="contact-form-btn" />
        </form>
      </section>
  )
}

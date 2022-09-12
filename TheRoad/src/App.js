
import './css/Global.css'
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Populartour from './Components/Populartour';
import Stories from './Components/Stories';
import Contact from './Components/Contact';
import Footer from './Components/Footer'
import NoPage from './Components/NoPage'

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //Declaring Variable
  const[isActive,setActive] = useState(false)

  
  //Navbar toggle function
  const opencloseNavbar = ()=>{
    setActive(!isActive)
  }

  
  return (
    <div className="App">
      <div className={`${isActive?'container change':'container'}`}>

      <Router>
      <Routes>
        <Route path="/" element={<Navbar opencloseNavbar = {opencloseNavbar} />}>
          <Route index element={<Header />} />
          <Route path="populartours" element={<Populartour />} />
          <Route path="stories" element={<Stories />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;

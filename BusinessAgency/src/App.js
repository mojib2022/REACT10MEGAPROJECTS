import Navbar  from './Components/Navbar'
import Menu  from './Components/Menu'
import Banner from './Components/Banner'
import Video from './Components/Video'
import Contact from './Components/Contact' 
import Footer from './Components/Footer'
import NoPage from './Components/NoPage'
import { useState } from 'react';
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const[isActive,setActive] = useState(false)
  
  const toggle = ()=>{
    setActive(!isActive)
  }
  return (
    <div className="App">
    <Navbar isActive={isActive}/>
    <Menu toggle = {toggle} isActive={isActive}/>
    <div className="container">

    <Router>
      <Routes>
          <Route index element={<Banner />} />
          <Route path="video" element={<Video />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
    <Footer />
    </div>
    </div>
   
  );
}

export default App;


import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/Global.css';
import Menu from './Components/Menu'
import NavBar from './Components/NavBar'
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import NoPage from './Components/NoPage'

function App() 
{
  const [isActive,setisActive] = useState(false);

  const handleMenu = ()=>{
    setisActive(!isActive);
  }
  
  return (
    <div className="App">
    <Menu toggle={handleMenu} isActive = {isActive}/>
    <NavBar isActive = {isActive}/>
    <Router>
      <Routes>
        <Route index element={<Section1 />} />
        <Route path="/section2" element={<Section2 isActive = {isActive}/>} />
        <Route path="/section3" element={<Section3 isActive = {isActive}/>} />
        <Route path="/section4" element={<Section4 isActive = {isActive}/>} />
        <Route path="/section5" element={<Section5 isActive = {isActive}/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;


import './App.css';
import Spinner from './Components/Spinner'
import Menu from './Components/Menu'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Aboutus from './Components/Aboutus'
import Team from './Components/Team'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ScrollButton from './Components/ScrollButton'
import NoPage from './Components/NoPage';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
//Spinner to be displayed
window.onload = () => {
  console.log('Hello')
  setTimeout(() => {
    console.log('Hello')
    document.getElementsByClassName("App").classList.add("display");
  }, 4000);
};
// End of Spinner

//Toggling Ham burger Menu
const [isActive,setActive] = useState('')
const handleChange = ()=>{
  setActive(!isActive)
}
//End of Toggling Hamburger Menu



  return (
    <div className="App" id="App">
     <Spinner />

    <div className={isActive?"container change":"container"} id="home">
    <Menu isActive={isActive} handleChange = {handleChange}/>
    
      <Router>
      <Routes>
        <Route path="/" element={ <Sidebar /> }>
          <Route index element={<Header />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
      <Footer />
      <ScrollButton />
    </div>
        
    </div>
  );
}

export default App;

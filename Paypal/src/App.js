import './Global.css';
import Home from './Components/Home';
import  StakeHolders from './Components/StakeHolders';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import NoPage from './Components/NoPage';
import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  // Pages
  const loginPage = useRef(0)
  const frontPage = useRef(0)
  const signupPage = useRef(0)

  const handleLogoClick = ()=>{
    frontPage.current.style.display = "Block";
    loginPage.current.style.display = "none";
    signupPage.current.style.display = "none";
  }
/*
  const handleLogin = ()=>{
    frontPage.current.style.display = "none";
    loginPage.current.style.display = "block";
    signupPage.current.style.display = "none";
  }

  const handleSignup = ()=>{
    frontPage.current.style.display = "none";
    loginPage.current.style.display = "none";
    signupPage.current.style.display = "block";
  }
*/

  return (
    <div className="App">
        <div className="front-page">
        <Router>
      <Routes>
        <Route path="/" element={<Home />}>
         
          <Route path="/features" element={<Features />} />
          <Route path="/stakeholders" element={<StakeHolders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
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


import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import NoPage from './Components/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  /*Progress Bar*/ 
  const progressBarPercents = [97, 95, 93, 91, 89, 87, 86,84,82,80,78,75,73,71,69];
  document.querySelectorAll(".progress-percent").forEach((el, i) => {
    el.style.width = `${progressBarPercents[i]}%`;
    el.previousElementSibling.firstElementChild.textContent =
      progressBarPercents[i];
  });
 /**End of Progress Bar */

  return (
    <div className="App">
      <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;

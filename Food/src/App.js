import './css/App.css'
import Navbar from './Components/Navbar';
import PopularMeals from './Components/PopularMeals'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'
import Varietyoffoods from './Components/Varietyoffoods';
import Contact from './Components/Contact'
import NoPage from './Components/NoPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() { 
  return (
    <div className="App">
    <Navbar />
    <div className='container'>
     <Router>
     
     
      <Routes>
        
        
          <Route index element={<Varietyoffoods />} />
          <Route path='/popularmeals' element={<PopularMeals />} />
          <Route path='/burger' element={<Gallery />} />
          <Route path='/pizza' element={<Gallery />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="*" element={<NoPage />} />

      </Routes>
    </Router>
    </div>
    <Footer />
    </div>
  );
}



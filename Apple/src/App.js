import './App.css';
import Home from './Components/Home'
import Navigation from  './Components/Naviagtion'
import Iphones from './Components/Iphones'
import MacBook from './Components/MacBook'
import Watches from './Components/Watches'
import Airpods from './Components/Airpods'
import Footer from './Components/Footer'
import NoPage from './Components/NoPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
// Common JS
document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach(control => {
    control.addEventListener('click', e => {
        e.preventDefault()
    })
})
// End of Common JS

  return (
    <div className="App">
      <div className="container">
      <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="iphones" element={<Iphones />} />
          <Route path="macbook" element={<MacBook />} />
          <Route path="watches" element={<Watches />} />
          <Route path="airpods" element={<Airpods />} />
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

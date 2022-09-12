import './css/Global.css';
import Layout from './Components/Layout'
import Customers from './Components/Customers'
import Team from './Components/Team'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import NoPage from './Components/NoPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  

  return (
    <div className="container">
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Customers />} />
          <Route path="customers" element={<Customers />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
      <Footer />
    </div>
  );
}

export default App;

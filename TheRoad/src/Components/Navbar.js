import '../css/navbar.css';
import { Outlet,Link } from "react-router-dom";
export default function Navbar({opencloseNavbar}) {
  
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

  return (
    <><div className="open-navbar-icon navbar-icon center" onClick={opencloseNavbar}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
  <div className="navbar-wrapper">
    <nav className="navbar" onClick={opencloseNavbar}>
      <div className="close-navbar-icon navbar-icon center">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
      </div>
      <div className="nav-list">
        <Link to="/" className="nav-link center">Home</Link>
        <a href="populartours" className="nav-link center">Tours</a>
        <a href="stories" className="nav-link center">Stories</a>
        <a href="contact" className="nav-link center">Contact</a>
      </div>
    </nav>
  </div>
  <Outlet />
  </>

  )
}

import './App.css'
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Contact from './Components/Contact';
import Progress from './Components/Progress'
import LeftRightButton from './Components/LeftRightButton';
import { useRef } from 'react';

function App() {

  let counter1 = 0;
  let counter2 = 1;
  let bool = true;
  
  const sections = document.querySelectorAll("section");
  const progress = document.querySelector(".progress h2");
  const circles = document.querySelectorAll(".circle");
  
  const section1wrapper = document.querySelector(".section-1-wrapper");
  const section5wrapper = document.querySelector(".section-5-wrapper");
  
  //section1wrapper.style.transform = "scale(1)";
  
  const progressCounter = () => {
    progress.textContent = `${counter2}/${sections.length}`;
  
    Array.from(circles).forEach((circle) => {
      circle.style.backgroundColor = "transparent";
    });
    document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
  };
  
  const pageController = () => {
    bool = true;
    if (counter1 === 5) {
      Array.from(sections).forEach((section) => {
        section.style.left = "0";
      });
      counter1 = 0;
      counter2 = 1;
      section1wrapper.style.transform = "scale(1)";
      section5wrapper.style.transform = "scale(1.5)";
      progressCounter();
      bool = false;
    }
  
    if (counter1 === -1) {
      Array.from(sections).forEach((section) => {
        if (section.classList[0] === "section-5") {
          return;
        }
        section.style.left = "-100vw";
      });
      counter1 = 4;
      counter2 = 5;
      section1wrapper.style.transform = "scale(1.5)";
      section5wrapper.style.transform = "scale(1)";
      progressCounter();
      bool = false;
    }
    progressCounter();
    return bool;
  };
  
  window.addEventListener("wheel", (e) => {
    const deltaY = e.deltaY > 0;
  
    if (deltaY) {
      counter1++;
      counter2++;
    } else {
      counter1--;
      counter2--;
    }
  
    pageController();
    progressCounter();
    console.log(counter1, counter2);
  
    if (bool) {
      document.querySelector(
        `.section-${deltaY ? counter1 : counter2}`
      ).style.left = `${deltaY ? "-100vw" : "0"}`;
  
      document.querySelector(
        `.section-${deltaY ? counter1 : counter2}-wrapper`
      ).style.transform = `scale(${deltaY ? "1.5" : "1"})`;
  
      document.querySelector(
        `.section-${deltaY ? counter1 + 1 : counter2 + 1}-wrapper`
      ).style.transform = `scale(${deltaY ? "1" : "1.5"})`;
    }
  });
  
  document.querySelector(".left-btn").addEventListener("click", () => {
    counter1--;
    counter2--;
    pageController() &&
      (document.querySelector(`.section-${counter2}`).style.left = "0");
  
    if (bool) {
      document.querySelector(`.section-${counter2}-wrapper`).style.transform =
        "scale(1)";
      document.querySelector(`.section-${counter2 + 1}-wrapper`).style.transform =
        "scale(1.5)";
    }
  });
  
  document.querySelector(".right-btn").addEventListener("click", () => {
    counter1++;
    counter2++;
    pageController() &&
      (document.querySelector(`.section-${counter1}`).style.left = "-100vw");
  
    if (bool) {
      document.querySelector(`.section-${counter2}-wrapper`).style.transform =
        "scale(1)";
      document.querySelector(`.section-${counter1}-wrapper`).style.transform =
        "scale(1.5)";
    }
  });
  
  document.querySelector(".grapes-img").addEventListener("mouseover", () => {
    document.querySelector(".section-3-wrapper").style.opacity = ".5";
  });
  
  document.querySelector(".grapes-img").addEventListener("mouseout", () => {
    document.querySelector(".section-3-wrapper").style.opacity = "1";
  });
  
  
  


  return (
    <div className="App">
      <div className="container">
      <Navbar />
      <LeftRightButton />
      <Progress />

      <div className="wrapper">
      <section className="section-1" >
          <div className="section-wrapper section-1-wrapper" ref={section1wrapper}>
            <div className="section-1-heading-wrapper">
              <h1 className="section-1-heading">The best wines around the world</h1>
            </div>
          </div>
        </section>
        <Section2 />
        <Section3 />
        <Section4 />
        <Contact section5wrapper={section5wrapper}/>
      </div>
    </div>
    </div>
  );
}

export default App;

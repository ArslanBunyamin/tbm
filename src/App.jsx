import "./App.scss";
import Effects from "./components/Effects";
import Home from "./components/Home";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Graphics from "./components/Graphics";
import WhatToDo from "./components/WhatToDo";

function App() {
  useEffect(() => {
    //check if hidden elements are intersecting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) {
            entry.target.src = entry.target.src;
          }
        });
      },
      { root: document.querySelector(".mainSection") }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    //check if navbar scrolled
    const mainSection = document.querySelector(".mainSection");
    const navbar = document.querySelector(".navbar");
    const navbarWave = document.querySelector(".navbarWave");
    mainSection.addEventListener("scroll", () => {
      if (mainSection.scrollTop >= 40) {
        navbar.classList.add("scrolled");
        navbarWave.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
        navbarWave.classList.remove("scrolled");
      }
    });

    //set img loadings to lazy
    const imgs = document.querySelectorAll("img");
    imgs.forEach((el) => {
      el.setAttribute("loading", "lazy");
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="mainSection">
        <Home />
        <Effects />
        <Graphics />
        <WhatToDo />
      </div>
    </div>
  );
}

export default App;

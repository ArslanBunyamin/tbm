import "./App.scss";
import Effects from "./components/Effects";
import Home from "./components/Home";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    //check if hidden elements is intersecting
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.src = entry.target.src;
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

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
      el.setAttribute("loading", "lazys");
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="mainSection">
        <Home />
        <Effects />
      </div>
    </div>
  );
}

export default App;

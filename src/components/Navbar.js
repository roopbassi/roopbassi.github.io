import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
  const[expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  // Runs whenever location changes (e.g. when button is clicked in menu)
  useEffect(() => {
    setExpandNavbar(false);
  },[location])

  // For Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: "smooth"
      });
    })
  })
  
  return (
    <div className = "navbar" id = {expandNavbar ? "open" : "closed"}>
        <div className = "toggleButton">
            <button onClick={() => {setExpandNavbar((prev) => !prev);}}>
               <MenuIcon />
            </button>
        </div>
        <div className = "links"> 
            <a href = "#home"> Home </a>
            <a href = "#skills"> Skills</a>
            <a href = "#projects"> Projects </a>
            <a href = "#contact"> Contact </a>
        </div> 
    </div>
  )
}

export default Navbar
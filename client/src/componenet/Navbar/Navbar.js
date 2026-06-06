import React, { useState, useEffect } from 'react'
import './Navbar.css'
import './../../views/Home/Home.css'
function Navbar() {
  const [theam, setTheam] = useState('light')
  const toggleTheme = () => {
    if (theam === 'light') {
      setTheam('dark');
    } else {
      setTheam('light');
    }
  };
  useEffect(() => {
    document.body.className = theam;
  }, [theam]);
  return (
    <div>
      <div id="cur-dot"></div>
<div id="cur-ring"></div>

<!-- NAVBAR -->
<nav id="navbar">
  <div class="nav-logo" onclick="showPage('home')">AM</div>
  <ul class="nav-links">
    <li><a onclick="showPage('home')" data-page="home">Home</a></li>
    <li><a onclick="showPage('about')" data-page="about">About</a></li>
    <li><a onclick="showPage('projects')" data-page="projects">Projects</a></li>
    <li><a onclick="showPage('skills')" data-page="skills">Skills</a></li>
    <li><a onclick="showPage('contact')" data-page="contact">Contact</a></li>
  </ul>
</nav>

    </div>
  )
}

export default Navbar

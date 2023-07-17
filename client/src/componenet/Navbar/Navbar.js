import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
   <header>
    <a href="#" class="logo">Yash <span> Bomble</span>.</a>

    <div class="bx bx-menu" id="menu-icon"></div>

    <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Project</a></li>
        <li><a href="#contact">Contact</a></li>
        <div class="bx bx-moon" id="darkmode"></div>
    </ul>
</header>
    </div>
  )
}

export default Navbar
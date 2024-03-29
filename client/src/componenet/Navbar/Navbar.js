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
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top height">
        <div class="container-fluid">
          <a href="#" className='logo'>Yash <span> Bomble</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar item">
              <li class="">
                <a class="" aria-current="page" href="#home">Home</a>
              </li>
              <li class="">
                <a class="" href="#about">About</a>
              </li>
              <li class="">
                <a class="" href='#skills'>Skills</a>
              </li>
              <li class="">
                <a class="" href="#services">Project</a>
              </li>
              <li>
                <a className='' href='#certificate'>Certificate</a>
              </li>
              <li>
                <a className='' href='#education'>Education</a>
              </li>
              <li class="">
                <a class="" href="#contact">Contact</a>
              </li>
              <div class="bx bx-moon" id="darkmode" onClick={toggleTheme}></div>
            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
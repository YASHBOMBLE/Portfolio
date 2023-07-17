import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import swal from 'sweetalert';
import profile from './../../images/profile.jpg'
import hotel from './../../images/hotel.png'
import GymSystem from './../../images/GymSystem.png'
import clock from './../../images/Clock.png'
import emoji from './../../images/Emoji App.png'
import './Home.css'

import Navbar from './../../componenet/Navbar/Navbar.js'
function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [message, setMessage] = useState('')


  async function cancle() {
    await Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cancelation Success',
      showConfirmButton: false,
      timer: 1500
    })
    setName('');
    setEmail('');
    setMobile('');
    setMessage('');
  }
  async function sendMesage() {
    const response = await axios.post('/send', {
      name: name,
      email: email,
      mobile: mobile,
      message: message

    })

    if (response.data.success == false) {

      await swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Ok",
      });
    }
    if (response.data.success) {
      await Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Message Send✔',
        showConfirmButton: false,
        timer: 1500
      })
      window.location.reload();
      setName('');
      setEmail('');
      setMobile('');
      setMessage('');
    }
  }
  return (
    <div>
      <Navbar />
      <section class="home" id="home">

        <div class="social">
          <a href="#"><i class='bx bxl-github'></i></a>
          <a href="#"><i class='bx bxl-instagram'></i></a>
          <a href="#"><i class='bx bxl-facebook'></i></a>
        </div>
        <div class="home-img ">
          <img src={profile} class="rounded-circle img-fluid shadow img-thumbnail" alt="" />
        </div>
        <div class="home-text">
          <span>Hello, I'm</span>
          <h1>Yash Bomble</h1>
          <h2>Web Devloper</h2>
          <p>I'm full stack web developer.<br /> my self yash bomble , i have recently complited Bacholers degree in computer science (Bsc
            conputer Science).and currently i was completing my post graduation in computer science (Msc Computer Science).  <br />I am also looking for internship as Web developer in  reputed IT company. </p>
            <a href="#contact" class="btn">Download CV</a>
          </div>
          </section>

          <section class="about" id="about">
    <div class="heading">
        <h2>About Me</h2>
        <span>Introduction</span>
    </div>

    <div class="about-container">
        <div class="about-img">
            <img src="main.png" alt="" />
        </div>
        <div class="about-text">
            <p>I'm full stack web developer.<br /> my self yash bomble , i have recently complited Bacholers degree in computer science (Bsc 
                conputer Science).and currently i was completing my post graduation in computer science (Msc Computer Scvience).  <br /></p>
            <a href="#contact" class="btn">Download CV</a><p/>
            <div class="information">
                <div class="info-box">
                    <i class='bx bxs-user'></i>
                    <span>Name</span>
                </div>

                <div class="info-box">
                    <i class='bx bxs-phone'></i>
                    <span>+91-8261025656</span>
                </div>

                <div class="info-box">
                    <i class='bx bxs-envelope'></i>
                    <span>yashbomble2002@gmail.com</span>
                </div>
            </div>
            <button class="btn">Download Cv</button>
        </div>
    </div>
</section>
         
<section class="skills" id="skills">
    <div class="heading">
        <h2>Skills</h2>
        <span>My Skills</span>
    </div>

    <div class="skills-container">
        <div class="bars">

            <div class="bars-box">
                <h3>HTML</h3>
                <span>94%</span>
                <div class="light-bar"></div>
                <div class="percent-bar html-bar"></div>
            </div>

            <div class="bars-box">
                <h3>CSS</h3>
                <span>84%</span>
                <div class="light-bar"></div>
                <div class="percent-bar css-bar"></div>
            </div>

            <div class="bars-box">
                <h3>JavaScript</h3>
                <span>74%</span>
                <div class="light-bar"></div>
                <div class="percent-bar js-bar"></div>
            </div>

            <div class="bars-box">
                <h3>React</h3>
                <span>80%</span>
                <div class="light-bar"></div>
                <div class="percent-bar react-bar"></div>
            </div>

            <div class="bars-box">
                <h3>c</h3>
                <span>79%</span>
                <div class="light-bar"></div>
                <div class="percent-bar react-bar"></div>
            </div>

            <div class="bars-box">
                <h3>Java</h3>
                <span>81%</span>
                <div class="light-bar"></div>
                <div class="percent-bar react-bar"></div>
            </div>

            <div class="bars-box">
                <h3>Python</h3>
                <span>77%</span>
                <div class="light-bar"></div>
                <div class="percent-bar react-bar"></div>
            </div>
            <div class="bars-box">
                <h3>Git And GitHub</h3>
                <span>87%</span>
                <div class="light-bar"></div>
                <div class="percent-bar react-bar"></div>
            </div>
        </div>
        
        <div class="skills-img">
            <img src={profile} alt="Skill" />
        </div>
    </div>
</section>
          <hr className='mt-3' id='project' />
          <div className='row' >
            <div className='col-md-12'>
              <div className='project-title'>
                ||  Project's  ||
              </div>
            </div>
          </div>
          <hr />
          <div className='row align-item'>
            <div className='col-md-3 '>
              <div class="ui-card">
                <img src={hotel} className='img-fluid mt-5 img-size' />
                <div class="description">
                  <h3>Hotel Table Booking System</h3>
                  <p>Full Stack Project Developed Using MERN Stack.</p>
                  <a href="https://github.com/YASHBOMBLE/Hotel_management_project-booking-syatem-" className='me-2'>Source Code</a>
                  <a href="#">Demo</a>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div class="ui-card">
                <img src={GymSystem} className='img-fluid mt-5' />
                <div class="description">
                  <h3>Gym Management System</h3>
                  <p>MERN Stack project.Created during final year.</p>
                  <a href="https://github.com/YASHBOMBLE/GYM-SYSTEM" className='me-2' target='_blank'>Source Code</a>
                  <a href="https://gymsystem.onrender.com/login" target='_blank'>Demo</a>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div class="ui-card">
                <img src={clock} className='img-fluid mt-5' />
                <div class="description">
                  <h3>Digital Clock</h3>
                  <p>MERN Stack Project.</p>
                  <a href="https://github.com/YASHBOMBLE/Digital_Clock" className='me-2' target='_blank'>Source Code</a>
                  <a href="https://digital-clock2002.netlify.app/" target='_blank'>Demo</a>
                </div>
              </div>
            </div>


            <div className='col-md-3'>
              <div class="ui-card">
                <img src={emoji} className='img-fluid mt-5' />
                <div class="description">
                  <h3>Emoji App💯</h3>
                  <p>Simple ReactJs Mini Project.</p>
                  <a href="https://github.com/YASHBOMBLE/emoji-app" className='me-2' target='_blank'>Source Code</a>
                  <a href="https://emoji-app123.netlify.app/" target='_blank'>Demo</a>
                </div>
              </div>
            </div>


          </div>
          <hr className='mt-3' id='resume' />
          <div className='row' >
            <div className='col-md-12'>
              <div className='project-title'>
                Resume
              </div>
            </div>
          </div>
          <div className='row' id='resume'>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4 text-center mt-4 mb-3 resume-container'>
              <a href='https://drive.google.com/file/d/1-F90wLMPk5iJdKb2RD6lRQ9HUClkRSIW/view' target='_blank' >Get Resume</a>
            </div>
            <div className='col-md-4'>

            </div>
          </div>

          <hr className='mt-3' id='contact' />
          <div className='row' >
            <div className='col-md-12'>
              <div className='project-title'>
                Contact
              </div>
            </div>
          </div>
          <div class="background">
            <div class="container">
              <div class="screen">
                <div class="screen-header">
                  <div class="screen-header-left">
                    <div class="screen-header-button close"></div>
                    <div class="screen-header-button maximize"></div>
                    <div class="screen-header-button minimize"></div>
                  </div>
                  <div class="screen-header-right">
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div class="screen-body">
                  <div class="screen-body-item left">
                    <div class="app-title">
                      <span>CONTACT</span>
                      <span>US</span>
                    </div>
                    <div class="app-contact">CONTACT INFO : +91-8261025656</div>
                  </div>
                  <div class="screen-body-item">
                    <div class="app-form">
                      <div class="app-form-group">
                        <input class="app-form-control" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div class="app-form-group">

                        <input class="app-form-control" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div class="app-form-group">
                        <input class="app-form-control" placeholder="CONTACT NO" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                      </div>
                      <div class="app-form-group message">
                        <input class="app-form-control" placeholder="MESSAGE" value={message} onChange={(e) => setMessage(e.target.value)} />
                      </div>
                      <div class="app-form-group buttons">
                        <button class="app-form-button" onClick={cancle}>CANCEL</button>
                        <button class="app-form-button" onClick={sendMesage}>SEND</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className='text-center footer-text' >Copyright@ Yash Bomble </p>
        </div>

        )
}

        export default Home
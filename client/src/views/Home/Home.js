import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import swal from 'sweetalert';
import profile from './../../images/profile.jpg'
import hotel from './../../images/hotel.png'
import GymSystem from './../../images/GymSystem.png'
import clock from './../../images/Clock.png'
import emoji from './../../images/Emoji App.png'
import gym from './../../images/gym.png'
import restaurant from './../../images/restaurant.png'
import digiclock from './../../images/digiclock.png'
import happy from './../../images/happy.png'
import Profile from './../../images/Profile.png'
import skills from './../../images/skills.png'
import icp from './../../images/icp.jpeg'
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
  function DownloadFile(fileName) {
    //Set the File URL.
    var url = "./../Resume" + fileName;

    //Create XMLHTTP Request.
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    req.onload = function () {
      //Convert the Byte Data to BLOB object.
      var blob = new Blob([req.response], { type: "application/octetstream" });

      //Check the Browser type and download the File.
      var isIE = false || !!document.documentMode;
      if (isIE) {
        window.navigator.msSaveBlob(blob, fileName);
      } else {
        var url = window.URL || window.webkitURL;
        const link = url.createObjectURL(blob);
        var a = document.createElement("a");
        a.setAttribute("download", fileName);
        a.setAttribute("href", link);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    };
    req.send();
  };
  return (
    <div>
      <Navbar />
      <section class="home" id="home">

        <div class="social">
          <a href="https://github.com/YASHBOMBLE" target='_blank'><i class='bx bxl-github'></i></a>
          <a href="https://www.instagram.com/yasshhhh_16/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank'><i class='bx bxl-instagram'></i></a>
          <a href="https://www.facebook.com/yash.bomble.5?mibextid=ZbWKwL" target='_blank'><i class='bx bxl-facebook'></i></a>
          <a href='https://www.linkedin.com/in/yashbomble' target='_blank' ><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div class="home-img ">
          <img src={Profile} class="rounded-circle img-fluid shadow img-thumbnail" alt="" />
        </div>
        <div class="home-text">
          <span>Hello, I'm</span>
          <h1>Yash Bomble</h1>
          <h2 className='developer'>Web Devloper</h2>
          <p>I'm full stack web developer.<br /> My self Yash Bomble , i have recently complited Bacholers degree in computer science (Bsc
            conputer Science).and currently i was completing my post graduation in computer science (Msc Computer Science).  <br />I am also looking for internship as Web developer in  reputed IT company. </p>
          <button class="btn"   >Download CV</button>
        </div>

      </section>

      <section class="about" id="about">
        <div class="heading">
          <h2>About Me</h2>
          <span>Introduction</span>
        </div>

        <div class="about-container">
          <div class="about-img">
            <img src={Profile} class="rounded-circle img-fluid shadow img-thumbnail" alt="" />

          </div>
          <div class="about-text">
            <p>I'm full stack web developer.<br /> My self Yash Bomble , i have recently complited Bacholers degree in computer science (Bsc
              conputer Science).and currently i was completing my post graduation in computer science (Msc Computer Science).  <br /></p>

            <div class="information">
              <div class="info-box">
                <i class='bx bxs-user'></i>
                <span>Yash Dattatray Bomble</span>
              </div>

              <div class="info-box">
                <i class='bx bxs-phone'></i>
                <span> <a href='tel:+91-8261025656' className='textDecoration'>+91-8261025656</a></span>
              </div>

              <div class="info-box">
                <i class='bx bxs-envelope'></i>
                <span><a href='mailto:yashbomble2002@gmail.com' className='textDecoration'>yashbomble2002@gmail.com</a></span>
              </div>
            </div>
            <button class="btn" >Download CV</button><p />
          </div>
        </div>
      </section>

      <section class="certificate" id="certificate">
        <div class="heading">
          <h2>Certificate</h2>
          <span></span>
        </div>

        <div class="about-container">

          <div class="about-text">
            <p><h4>Internship Cohort Program (ICP) </h4>www.roadtocode.org<br />Aug 2022  <br /></p>

          </div>
          <div class="about-img">
            <img src={icp} class=" img-fluid shadow  certificateimgsize" alt="" />
          </div>
        </div>
      </section>

      <section class="skills" id="skills">
        <div class="heading">
          <h2>Skills</h2>
          <span>My Skills</span>
        </div>

        <div class="skills-container">
          <div class="skills-img">
            <img src={skills} alt="Skill" />
          </div>
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


        </div>
      </section>
      
      <section class="services" id="services">
        <div class="heading">
          <h2>Project's</h2>
          <span>My Project's</span>
        </div>
        <div class="services-content">
          <div class="services-box">
            <img src={gym} className='img-fluid project-img' />
            <h3>Gym Management System</h3>
            <a href="#">Source Code</a>
            <a href="#">Online Demo</a>
          </div>

          <div class="services-box">
            <img src={restaurant} className='img-fluid project-img' />
            <h3>Hotel Table Booking System</h3>
            <a href="#">Source Code</a>
            <a href="#">Online Demo</a>
          </div>
          <div class="services-box">
            <img src={digiclock} className='img-fluid project-img' />
            <h3>Digital Clock</h3>
            <a href="#">Source Code</a>
            <a href="#">Online Demo</a>
          </div>

          <div class="services-box">
            <img src={happy} className='img-fluid project-img' />
            <h3>Emoji App</h3>
            <a href="#">Source Code</a>
            <a href="#">Online Demo</a>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="heading">
          <h2>Contact</h2>
          <span>Connect With Me</span>
        </div>
        <div class="contact-form">
          <form action="">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Mo.No" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <input type="email" name="" id="" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea name="" id="" cols="30" rows="10" placeholder="Write Message Here..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <input type="button" onClick={sendMesage} value="Send" class="contact-button" />

          </form>
        </div>
      </section>

      <div class="footer">
        <h2>Follow Me On</h2>
        <div class="footer-social">
          <a href="https://www.facebook.com/yash.bomble.5?mibextid=ZbWKwL" target='_blank'><i class='bx bxl-facebook'></i></a>
          <a href="https://instagram.com/yasshhhh_16/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target='_blank'><i class='bx bxl-instagram'></i></a>
          <a href='https://www.linkedin.com/in/yashbomble' target='_blank' ><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://wa.me/+919067613195"><i class="fa-brands fa-whatsapp"></i></a>
        </div>

      </div>

      <div class="copyright">
        &#169; Yash| All Right Reserved.<p />
      </div>
    </div>

  )
}

export default Home
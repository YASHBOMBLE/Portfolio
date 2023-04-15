import React from 'react'
import profile from "./../images/profile.jpg";
function Home() {
  return (
    <div className='row'>
      <div className='col-md-6'>
      <div className='text-center mt-1' >
      <img src={profile} className='rounded-circle img-fluid shadow img-thumbnail' style={{height: '320px', width:'320px',cursor: 'pointer'}}/>
      </div>
      </div>
      <div className='col-md-6'>
      <div class="animated-txt">
          <div class="text-top m-3">
              <span class="display-2 Profile-name">Hi I'am,</span>
              
              <span class="Profile-name display-6" style={{color: 'wheat'}}>Yash Dattatray Bomble</span>
            </div>
          </div>
          <div class="text-bottom">
            
            <div class="bio" style={{color: '#80ffd4 ',textAlign:'center'}}>Final Year | Bsc computer Science</div>
          </div>
        </div>
        <br />
        <div className='skills-container'>
          
        <span className='skill'> C Programing</span>
        <span className='skill'> Python Programing</span>
        <span className='skill'>Java Programing</span>
        </div>
        </div>

      
   
   
  )
}

export default Home

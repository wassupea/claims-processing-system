import React, {useState, useEffect} from 'react'

import '../componentsCSS/Landingpage.scss';

function LandingPage() {


  return (
    <>
      <div>
        <body>

          

            <div className='container'>

              <div className='img-container'>
              <img src="/images/holdinghands.png" className='image_body' alt="image" /> 
              </div>

              <div className='start-container'>

                <p className='caring'>CARING FOR LIFE</p> 
                <p className='lorem'>Lorem Ipsum Dolor<br/> Sit Amet Consectetur</p> 

                <div className='button-container'>
                    <p>Get Started <i class="fa-solid fa-arrow-right"></i></p>
                </div>

              </div>

              <div className='btns-container'>
              <div className='second-half'>
                 <button>Member <i class="fa-solid fa-user-group"></i> </button>    
                  <button className='hci'>Health Care Institution <i class="fa-solid fa-hospital"></i></button>
              </div>
              </div>



              
            </div>
           
        </body>
      </div>
    </>
  )
}

export default LandingPage;

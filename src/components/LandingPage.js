import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
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

                <p>CARING FOR LIFE</p>
                <h1>Lorem Ipsum Dolor Sit Amet Consectetur</h1>

                <div className='button-container'>
                    <p>Get Started</p>
                </div>

              </div>


            </div>
           
        </body>
      </div>
    </>
  )
}

export default LandingPage;

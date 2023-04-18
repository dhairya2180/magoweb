import React from 'react';
import "./PatientPortal.css"

const PatientPortal = () => {
  return (
    <>
    <div className='container-fluid   patient_banner d-flex justify-content-center align-items-center'>
      

      
      <div className='row mx-0 px-0   bg-white py-5 white_height '>
          <div className='col-12  d-flex  align-items-center'> 
          <div className='row mx-0 px-0'>
              <div className="col-6 mx-0  d-flex  justify-content-center align-items-center">
                    <div className='justify-content-center '>
                    <button type="button" class="px-5 py-3 patient_btn_bg border border-0 text-white">Continue as Practice Staff<img src={require('../../images/Patient/Vector.png')} alt='img' className='  ps-5 img-fluid'></img></button>

                          <p className='text-center text_dark'>or</p>
                          <div className='d-flex justify-content-center '>
                          <button type="button" class="px-5 py-3  border bg-light border-0 text_dark ">Continue as Patient<img src={require('../../images/Patient/vector2.png')} alt='img' className='  ps-5 img-fluid'></img></button>
                          </div>
                    </div>
              </div>
              <div className="col-6 mx-0 px-0">
                <div className=''>
                  <p className='text-center'>Login</p>
                  <div className=''>
                  <p className=''>Username</p>
                  <input type="email" id="email" placeholder='Enter your mail' name="email"></input>
                  <p className=''>Password</p>
                  <input type="email" id="email" placeholder='Password' name="email"></input>
                             <br/>
                  <button type="button" class=" border bg-light border-0 ">Forgot password?</button>
                     <br />
                  <button type="button" class="px-5 py-3  border bg-light border-0 text_dark ">Continue as Patient</button>
               </div>
                </div>
                </div>
              </div>
              </div>
      </div>
    </div>

   
    </>
  )
}

export default PatientPortal;
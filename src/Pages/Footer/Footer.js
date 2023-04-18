import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className='conatiner-fluid footer_height '>
      <div className='row mx-0 px-3 px-lg-5 footer_margin d-flex justify-content-center' id='text-color'>
         <div className=' col-12 col-xl-5 mx-0 px-0  ps-lg-5 '>
          <div className='d-flex justify-content-center '>
         <img src={require('../../images/Altamonte_Dermatology_logos/Altamonte Dermatology logos/Altamonte Green Background 512x512-PhotoRoom.png-PhotoRoom.png')} alt="React Logo"  className='' style={{height: "180px" , width: "180px"}} />
         </div>
         {/* <p className='text-white footer_addres_font_mobile d-xl-none '>Allison Cassedy is a board-certified Physician assistant with experience in general and surgical dermatology.</p> */}
          {/* <div class="d-flex justify-content-center align-items-center mt-5 d-xl-none">
                 
                 
                     <img src={require('../../images/Mobile_Contact/facebook.png')} alt="React Logo"/>
                     <img src={require('../../images/Mobile_Contact/youtube.png')} alt="React Logo" className="ps-5 pe-5"/>
                     <img src={require('../../images/Mobile_Contact/tweeter.png')} alt="React Logo" />
                  
                  </div>       */}
         <p className='text-white text-center  footer_addres_font d-none d-xl-block'>411 Maitland Ave. Ste 1001 <br/> Altamonte Springs, FL 32701 <br/> Phone: 407.260.2606</p>
         </div>
         <div className='col-8 col-md-6 col-xl-3 mx-0 px-0 ps-lg-5  '>
           <h3  className='text-center  text-md-start mt-5 mt-xl-0 ps-0 ps-md-4 ps-lg-0'> Links</h3>
           <ul className='pl-0 mt-4 ps-1 ps-md-0'>
            <li className='pb-3 ps-0 ps-md-4 ps-lg-0 text-start'><img className='d-lg-none' src={require('../../images/Footer/Vector.png')}/><a href="" className='ps-3 ps-lg-0'><Link
             to="/Servicepage" onClick={()=>  window.scrollTo({
        top: 0,
        behavior: "smooth",
    })} >Services</Link></a></li>
            <li className='pb-3 ps-0 ps-md-4 ps-lg-0 text-start'><img  className='d-lg-none'src={require('../../images/Footer/Vector.png')}/><a href="#" className='ps-3 ps-lg-0'><Link    to="/InsuranceAndForms" onClick={()=>  window.scrollTo({
        top: 0,
        behavior: "smooth",
    })} >Insurance & Forms</Link></a></li>
            <li className='pb-3 ps-0 ps-md-4 ps-lg-0 text-start'><img  className='d-lg-none' src={require('../../images/Footer/Vector.png')}/><a href="#" className='ps-3 ps-lg-0'><Link  to="https://altamontedermatology.ema.md/" onClick={()=>  window.scrollTo({
        top: 0,
        behavior: "smooth",
    })} >Patient Portal</Link></a></li>
            <li className='text-start ps-0 ps-md-4 ps-lg-0'><img className='d-lg-none' src={require('../../images/Footer/Vector.png')}/><a href="#" className='ps-3 ps-lg-0'><Link    to="https://altamontedermatology.ema.md/ema/pay/onlinepayments" onClick={()=>  window.scrollTo({
        top: 0,
        behavior: "smooth",
    })} >Make a Payment</Link></a></li>
           
           </ul>
         </div>
         <div className='col-10 col-md-6 col-xl-4 mx-0 px-0  ps-md-5'>
                <h3 className='text-center  text-md-start mt-5 mt-xl-0 '>Hours</h3>
                <p className='hours_p  text-center  text-md-start footer_hours_font mt-3'>Monday – Friday  <br className='d-none d-md-block'/>
                          8:00 am to 5:00pm</p>
         </div>
         {/* <div className='col-12 col-xl-3 mx-0 px-0 ps-lg-5'>
         <h3 className='text-center mt-5 mt-md-5 mt-xl-0  text-lg-start '>Payment</h3>
         <div class="d-flex justify-content-center justify-content-lg-start  align-items-center mt-3 ">
                 
                 
                     <a href="#"><img src={require('../../images/Footer/Master.png')} alt="React Logo"  style={{height: '40px'}} /> </a>
                     <a href="#"><img src={require('../../images/Footer/png1.png')} alt="React Logo" className="ps-4 pe-4"/></a>
                     <a href="#"><img src={require('../../images/Footer/pngwing.png')} alt="React Logo" /></a>
                  
                  </div> 
         </div> */}
      </div>
      <hr className='border_class border_mobile '></hr>
      <div className='row mx-0 px-0 '>
        <p className='text-center text-white footer_text_bottom footer_tagline_margin px-0 '>Copyright 2023 |<a href='#' className='text-decoration-none text-white '>  Altamonte Dermatology</a></p>
      </div>
    </div>
  )
}

export default Footer;
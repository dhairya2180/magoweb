import React from "react";
import "./Contact.css";
import Map from "../../Map";
import { Link } from "react-router-dom";
import { useState } from 'react';
const Contact = () => {
  
  const [showIframe, setShowIframe] = useState(false);

  function handleClick() {
    setShowIframe(true);
  }
  return (
    <>
      <div className="container-fluid px-0 ">
        <div className="row mx-0 px-0 contact_banner">
          <div className="col-10 col-sm-9 col-md-10  ms-4 ms-md-0 px-0 mx-0 my-5  contact_square d-flex align-items-center justify-content-center">
            <div className="ps-3 ps-sm-0 ">
              <p className="text-white forms_font forms_font_mobile ">
                Contact
              </p>
              <p className="text-white forms_font1 forms_font_mobile1">
                How to reach us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="conatiner-fluid">
        <div className="row mx-0  px-0 d-flex justify-content-center">
          <div className="col-11 mx-0 px-0  d-flex justify-content-center">
            <img
              src={require("../../images/Contact/4.png")}
              className="img-fluid mt-5"
              alt="img"
            ></img>
          </div>
        </div> */}
      <Map />

      <div className="container-fluid mx-0 px-0  my-md-5 mt-5 pb-5">
        <div className="row mx-0  px-0  d-flex justify-content-center">
          <div className="col-11 col-lg-6 mx-0 px-0 d-flex justify-content-center ">
            <div className="pe-0 pe-md-5">
              <p className="font2 mb-2 text_dark">Phone</p>
              <p className="font3 text-6a6a6a">407.260.2606</p>
              <p className="font2 mb-2 text_dark">Location</p>
              <p className="font3 text-6a6a6a">
                411 Maitland Ave, Suite 1001
                <br /> Altamonte Springs, FL 32701
              </p>
              <p className="font2 mb-2 text_dark">Hours</p>
              <p className="font3 text-6a6a6a">
                Monday – Friday 8:00 am to 5:00pm
              </p>
              <p className="font2 mb-2 text_dark">Referrals</p>
              <p className="font3 text-6a6a6a">
                Please send referrals to referrals@altamontedermatology.com or
                fax to 407.260.6339
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-5 mx-0 px-0  d-flex justify-content-center pt-5 pt-lg-0">
            <div className="px-3 px-md-5 px-lg-0">
              <p className="text_dark contact_font1 pb-4 pb-lg-0 text-center text-lg-start">
                Make an appointment
              </p>

              <p className="contact_font2 text-6a6a6a">New Patients:</p>
              <ul className="ps-3 ps-md-5">
                <li className="contact_font2 text-6a6a6a">
                  Please call us at (407) 260-2606
                </li>
                <li className="contact_font2 text-6a6a6a">
                  Please complete the necessary new patient paperwork prior to
                  your appointment <Link to="/InsuranceAndForms"  onClick={()=>{

window.scrollTo({
    top: 0,
    behavior: "smooth",
});
                  }}
                  style={{textDecoration:"none"}}
     >here</Link>
                </li>
              </ul>
              <p className="contact_font2 text-6a6a6a">Established Patients:</p>
              <ul className="ps-3 ps-md-5">
                <li className="contact_font2 text-6a6a6a">
                  Please call us at (407) 260-2606 or{" "}
                  <a
                    href="https://self.schdl.com/patient/8660?location=10967"
                    style={{ textDecoration: "none" }}
                  >
                    self-schedule here{" "}
                  </a>
                  {/* <button onClick={handleClick}>Open Iframe</button>
      {showIframe && (
        <iframe src="https://self.schdl.com/patient/8660?location=10967" width="100%" height="400"></iframe>
      )} */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

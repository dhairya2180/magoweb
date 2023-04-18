import React from "react";
import "./Home.css";
import Map from "../Map";
import { Link } from "react-router-dom";
const Home = () => {

  return (
    <>
      {/* <div className='container-fluid px-0'>
        <div className='row mx-0 px-5 home-background-image d-flex align-items-center'>
            <div className='col-12 mx-0 px-5  '>
                <div className=' bg_home_square  position-relative bg_home_margin '> 
                  <p className='home_font_size text-white text-start  square_padding  mb-0 '>Your skin, our passion <br></br>Your partner in dermatology care</p>
                </div>
                <p className='text-white home_font_size1 text-start line_padding'>Experts in the early detection, prevention and treatment of skin cancer </p>
                <button type="button" class="d-flex justify-content-start align-items-center bg-white home_btn btn_bg line_margin">Make An Appointments</button>
            </div>
        </div>
    </div> */}

      <div className="container-fluid px-0">
        <div className="row mx-0 px-0 home_bg_img d-flex align-items-center justify-content-center">
          <div className="col-10 px-0 mt-md-5">
            <div className="home_square d-flex align-items-center">
              <div className="">
                <p className="text-white titile_font ps-5 d-none d-md-block">
                  {" "}
                  Your skin, our passion <br />
                  Your partner in dermatology care
                </p>
                <p className="text-white titile_font ps-4 ps-sm-5  d-md-none">
                  {" "}
                  Promoting Healthy Skin For An Active Lifestyle
                </p>
              </div>
            </div>
           
                <p className="text-white home_font_size1 text-start py-sm-4 py-lg-4  ">
                  Experts in the early detection, prevention and treatment of
                  skin cancer{" "}
                </p>
                {/* <button
                  type="button"
                  class="d-flex justify-content-start align-items-center bg-white home_btn btn_bg py-4 px-4"
                >
                  Make an Appointment
                </button> */}
             
          </div>
        </div>
      </div>

      <div className="container px-0 my-0 my-sm-5">
        <div className="row mx-0 px-0  py-5    ">
          <div className=" col-12 col-lg-5 mx-0 px-0 section2_bg position-relative d-flex justify-content-center ">
            <div className="row mx-0 px-0 justify-content-between  ">
              <div className="col-12 mx-0 px-0 pt-5">
                <img
                  src={require("../images/dermatologist_main/3.png")}
                  alt="img"
                  className="px-3 px-sm-0 img-fluid"
                ></img>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 mx-0  section2_leftpadding ps-lg-5">
            <div className="text-start sec2_title sec2_title_mobile text_dark py-5 py-lg-0">
              Welcome to Altamonte Dermatology
            </div>
            <p className="text-start sec2_p " id="sec2_fonttitle">
              Our mission is to provide our patients with the highest quality of
              medical, surgical, and cosmetic dermatological care. We strive to
              provide compassionate and individualized care, using innovative
              and cutting-edge therapies. <br /> <br />
              We are committed to providing our patients with the best possible
              care, and we believe that our mission statement reflects our
              commitment to excellence. Our core values are: <br /> <br />{" "}
              <span> Compassion:</span> We believe that all patients deserve to
              be treated with compassion and respect, regardless of their
              condition or background. <br /> <br /> <span>Excellence: </span>{" "}
              We are committed to providing our patients with the highest
              quality of care possible. <br /> <br /> <span> Innovation:</span>{" "}
              We are always looking for new and innovative ways to improve our
              care. <br /> <br /> <span> Patient-Centric Care: </span> We
              believe that our patients are our partners in care, and we strive
              to work with them to develop a plan that meets their individual
              needs.
            </p>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row mx-0 px-0 d-flex align-items-center">
          <div className=" col-12 col-lg-6 mx-0 pe-lg-5  ps-0 ">
            <div className="text-start sec2_title sec2_title_mobile pb-3 text_dark py-5 py-lg-0 text-center  text-lg-start">
              Our Vision
            </div>
            <p className="text-start sec2_p">
              Our vision is to be the leading dermatology clinic in the area,
              providing high-quality, compassionate care to all patients. We are
              committed to providing our patients with the most up-to-date and
              effective treatments for skin conditions, as well as education and
              support to help them manage their skin health. We believe that
              everyone deserves to feel confident and comfortable in their own
              skin, and we are dedicated to helping our patients achieve that
              goal.
            </p>
            <div className="d-flex justify-content-lg-start justify-content-center ">
              <img
                src={require("../images/dermatologist_main/sign.jpg")}
                className="w-25 "
                alt="img"
              ></img>
            </div>
            <p className="text_dark text-center text-lg-start  sec2_title py-3 py-lg-0">
              David Weinstein MD
            </p>
            <p className="text_dark text-center text-lg-start  sec2_p">
              Board certified dermatologist and micrographic dermatologic
              surgeon
            </p>
          </div>
          <div className=" col-12 col-lg-6 mx-0 px-0 position-relative order-first order-lg-last ">
            <img
              src={require("../images/dermatologist_main/BGDots.png")}
              className="img-fluid sec3bg"
              alt="img"
            ></img>
            <img
              src={require("../images/dermatologist_main/2.png")}
              className=" img-fluid sec3_img"
              alt="img"
            ></img>
          </div>
        </div>
      </div>

      <div className="container px-0 py-5 ">
        <div className="row mx-0 px-0  py-lg-5 justify-content-center">
          <div className="col-12 px-lg-5 px-2 mx-0 d-flex justify-content-center">
            <div className="">
              <div className="d-flex justify-content-center">
                <Link
                to="/Servicepage"
                  type="button"
                  class=" justify-content-center align-items-center sec4_btn"
                  style={{textDecoration:'none'}}
                onClick={()=>{

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                
                }}
                >
                  Our Services
                </Link>
              </div>

              <p className=" text-center sec2_title py-4 text_dark">
                We offer treatment of a wide variety of <br /> conditions to our
                patients
              </p>
              <p className="text-center  pb-4 sec2_p">
                Our goal is to provide high quality dermatologic care in a
                comfortable office-based setting. We are dedicated to improving
                the health of your skin and in meeting your individual needs.{" "}
              </p>
              <div className="d-flex justify-content-center">
                <Link
                to="/Servicepage"
                  type="button"
                  onClick={()=>{

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                
                }}
                
                style={{textDecoration:'none'}}
                  class="px-5 justify-content-center text-white align-items-center sec4_btn_knowmore"
                >
                  Know more{" "}
                  <img
                    src={require("../images/dermatologist_main/forward.png")}
                    className="ps-2 justify-content-center align-items-center "
                    alt="img"
                  ></img>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Map />
    </>
  );
};

export default Home;

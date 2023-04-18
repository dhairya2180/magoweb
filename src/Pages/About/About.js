import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      {/* <div className="conatiner-fluid">
        <div className="row mx-0 px-0 aboutus_banner">
          <div className="col-12 px-0 mx-0 d-flex align-items-center justify-content-center ">
            <img
              src={require("../../images/About/Shape.png")}
              alt="img"
              className=" h-75 img-fluid"
            ></img>
            <p className="text-white  banner_text position_title banner_text_titile">
              Meet Our Professional Staff
            </p>
          </div>
        </div>
      </div> */}

<div className="container-fluid px-0 ">
        <div className="row mx-0 px-0 about_banner d-flex align-content-center justify-content-start justify-content-md-center ">
          <div className=" ms-5 about_square d-flex justify-content-center align-items-center"> 
          <div className="col-12 col-md-12  ms-4 ms-md-0 px-0 mx-0 my-5    d-flex align-items-center justify-content-center ">
            <div className=" ">
              <p className=" ps-sm-5 text-white forms_font forms_font_mobile  ">
              Meet Our Professional Staff
              </p>
              {/* <p className="text-white forms_font1 forms_font_mobile1">
                Looking forward to serving you
              </p> */}
            </div>
          </div>
          </div>

        </div>
      </div>

      <div className="container-fluid mx-0 px-0 aboutus_sec2_position">
        <div className="row mx-0 px-0   ">
          <div className=" col-12 col-lg-6 mx-0 px-0 aboutusbg d-flex align-items-center py-5 py-md-0">
            <div className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <img
                  src={require("../../images/About/Imageandshape.png")}
                  alt="img"
                  className="img-fluid p-5 p-md-0 "
                ></img>
              </div>
              <div className="text-center my-md-5 my-3">
                <img
                  src={require("../../images/About/1.png")}
                  alt="img"
                  className="img-fluid pe-1 "
                ></img>
                <img
                  src={require("../../images/About/1.png")}
                  alt="img"
                  className=" ps-1 img-fluid "
                ></img>
              </div>
              <div className="text-center text-fafafa aboutus_sec2_font1  aboutus_sec2_font1_mobile px-5 ">
                {" "}
                Dr. Weinstein is a double board-certified dermatologist and Mohs
                surgeon who grew up in Maitland. He has been treating patients
                in Central Florida since 2015.
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mx-0 ps-lg-5 mt-5 mt-md-0 d-flex align-items-center">
            <div className="">
              <p className="text_dark text-center text-md-start about_sec2_font3 aboutus_mobile_font mb-0">
                David Weinstein, M.D.
              </p>
              <div class="d-flex justify-content-center justify-content-md-start">
                <p
                  class="my-md-4 my-4 d-flex justify-content-md-start  align-items-center about_sec2_btn about_sec2_btn_mobile"
                >
                  Education
                </p>
              </div>

              <p className="text-6a6a6a text-center text-md-start  about_sec2_font2 aboutus_mobile_font2">
                He graduated from Winter Park high School and received a B.A.
                from Brown University. He earned his M.D. at the University of
                Florida and did his residency in dermatology at New York Medical
                College. He completed his Mohs fellowship at Good Samaritan
                Trihealth in Cincinnati. <br /> <br />
                After completion of his fellowship he served as an associate
                professor of medicine at the UCF College of Medicine, where he
                cared for patients in the faculty practice and taught medical
                students and residents.
              </p>
              <div class="d-flex justify-content-center justify-content-md-start">
                <p
                  class="my-md-4  my-4 d-flex justify-content-start align-items-center about_sec2_btn about_sec2_btn_mobile2"
                >
                  Professional Affiliations
                </p>
              </div>
              <ul
                className="text_dark ps-0 aboutus_li_mobile my-md-4"
                id="aboutus_li "
              >
                <li className="text-start  ps-2 ps-md-0 pb-4 aboutus_li">
                  <img
                    src={require("../../images/About/Vector.png")}
                    alt="img"
                    className="img-fluid pe-2 pe-md-4 aboutus_vector_mobile"
                  ></img>
                  American College of Mohs Surgery
                </li>
                <li className="text-start ps-2 ps-md-0 pb-4 aboutus_li">
                  <img
                    src={require("../../images/About/Vector.png")}
                    alt="img"
                    className="img-fluid pe-2 pe-md-4 aboutus_vector_mobile"
                  ></img>
                  American Academy of Dermatology
                </li>
                <li className="text-start ps-2 ps-md-0  pb-4 aboutus_li">
                  <img
                    src={require("../../images/About/Vector.png")}
                    alt="img"
                    className="img-fluid pe-2 pe-md-4 aboutus_vector_mobile"
                  ></img>
                  American Society of Laser Medicine & Surgery
                </li>
                <li className="text-start ps-2 ps-md-0 aboutus_li ">
                  <img
                    src={require("../../images/About/Vector.png")}
                    alt="img"
                    className="img-fluid pe-2 pe-md-4 aboutus_vector_mobile"
                  ></img>
                  American Society of Dermatologic Surgery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mx-0 px-0 aboutus_sec2_position">
        <div className="row mx-0 px-0   ">
          <div className=" col-12 col-lg-6 mx-0 px-0 aboutusbg d-flex align-items-center py-5 py-md-0">
            <div className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <img
                  src={require("../../images/About/shape2.png")}
                  alt="img"
                  className="img-fluid p-5 p-md-0 "
                ></img>
              </div>
              <div className="text-center my-md-5 my-3">
                <img
                  src={require("../../images/About/1.png")}
                  alt="img"
                  className="img-fluid pe-1 "
                ></img>
                <img
                  src={require("../../images/About/1.png")}
                  alt="img"
                  className=" ps-1 img-fluid "
                ></img>
              </div>
              <div className="text-center text-fafafa aboutus_sec2_font1  aboutus_sec2_font1_mobile px-5 ">
                {" "}
                Allison Hock Cassedy is a board-certified Physician Assistant
                who was raised in the Orlando area. She has been treating
                dermatology patients of all ages since 2010.
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mx-0 ps-lg-5  mt-5 mt-md-0 d-flex align-items-center ">
            <div className="">
              <p className="text_dark text-center text-md-start about_sec2_font3 aboutus_mobile_font">
                Allison Cassedy, PA-C
              </p>
              <div class="d-flex justify-content-center justify-content-md-start">
                <p
                  class="my-md-4 my-4 d-flex justify-content-md-start  align-items-center about_sec2_btn about_sec2_btn_mobile"
                >
                  Education
                </p>
              </div>

              <p className="text-6a6a6a text-center text-md-start  about_sec2_font2 aboutus_mobile_font2">
                Allison Cassedy graduated from Furman University with a Bachelor
                of Science in 2007. She then went on to Nova Southeastern
                University’s Physician Assistant Program, where she graduated
                cum laude with her Master’s in Medical Sciences. <br />
                <br /> Allison became a NCCPA certified Physician Assistant in
                2010 and recertified in 2016.
              </p>
              <div class="d-flex justify-content-center justify-content-md-start">
                <p
                  class="my-md-4  my-4 d-flex justify-content-start align-items-center about_sec2_btn about_sec2_btn_mobile2"
                >
                  Professional Affiliations
                </p>
              </div>
              <ul
                className="text_dark ps-0 aboutus_li_mobile my-md-4"
                id="aboutus_li "
              >
                <li className="text-start  ps-2 ps-md-0 pb-4 aboutus_li">
                  <img
                    src={require("../../images/About/Vector.png")}
                    alt="img"
                    className="img-fluid pe-2 pe-md-4 aboutus_vector_mobile"
                  ></img>
                  Society of Dermatology Physician Assistants
                </li>
                <li className="text-start ps-2 ps-md-0 pb-4 aboutus_li">
                  <img
                    src={require("../../images/About/Vector.png")}
                    alt="img"
                    className="img-fluid pe-2 pe-md-4 aboutus_vector_mobile"
                  ></img>
                  Society of Dermatology Physician Assistants
                </li>
                <li className="text-start ps-2 ps-md-0  aboutus_li">
                  <img
                    src={require("../../images/About/Vector.png")}
                    alt="img"
                    className="img-fluid pe-2 pe-md-4 aboutus_vector_mobile"
                  ></img>
                  Society of Dermatology Physician Assistants
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mx-0 px-0 aboutus_sec2_position1">
        <div className="row mx-0 px-0   ">
          <div className=" col-12 col-lg-6 mx-0 px-0 aboutusbg d-flex align-items-center py-5 py-md-0">
            <div className="">
              <div className="d-flex align-items-center justify-content-center position-relative">
                <img
                  src={require("../../images/About/shape3.png")}
                  alt="img"
                  className="img-fluid p-5 p-md-0 "
                ></img>
              </div>
              <div className="text-center my-md-5 my-3">
                <img
                  src={require("../../images/About/1.png")}
                  alt="img"
                  className="img-fluid pe-1 "
                ></img>
                <img
                  src={require("../../images/About/1.png")}
                  alt="img"
                  className=" ps-1 img-fluid "
                ></img>
              </div>
              <div className="text-center text-fafafa aboutus_sec2_font1  aboutus_sec2_font1_mobile px-5 ">
                {" "}
                Dr. Jerri Johnson founded the practice in 1991. After more than 30 years of caring for patients in Central Florida she retired at the end of 2022.
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mx-0 ps-lg-5 my-5  d-flex align-items-center">
            <div className="">
              <p className="text_dark text-center text-md-start about_sec2_font3 aboutus_mobile_font">
                {" "}
                Jerri Johnson, M.D.<span className=" text_dark about_sec2_font2 ps-3">( Retired ) </span> 
              </p>
              <div class="d-flex justify-content-center justify-content-md-start">
                <p
                  class="my-md-5 my-4 d-flex justify-content-md-start  align-items-center about_sec2_btn about_sec2_btn_mobile"
                >
                  Education
                </p>
              </div>
              <p className="text-6a6a6a text-center text-md-start  about_sec2_font2 aboutus_mobile_font2">
              Dr. Johnson received her undergraduate degree in chemistry from Emory University in 1981. She graduated from the University of Florida College of Medicine in 1985, then went on to the University of South Florida for an internship in Internal Medicine.
 <br />
                <br /> She completed her residency in Internal Medicine from Orlando Regional in 1988 and was board certified in Internal Medicine in 1988. She then completed a three year residency in Dermatology at the University of Arkansas for Medical Sciences in 1991.
 <br />
                <br /> After more than 30 years of practice in Altamonte Springs, she retired in 2022.

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import React from "react";
import "./Appointments.css";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid px-0 ">
        <div className="row mx-0 px-0 appointments_banner">
          <div className="col-12 col-md-12  ms-4 ms-md-0 px-0 mx-0 my-5  square d-flex align-items-center justify-content-center justify-content-md-end">
            <div className="ps-3 ps-sm-0 ">
              <p className="text-white forms_font forms_font_mobile ">
                Insurance and Forms
              </p>
              <p className="text-white forms_font1 forms_font_mobile1">
                Looking forward to serving you
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 ">
        <div className="row mx-0 px-0 ">
          <div className=" col-12 col-lg-6 order-last order-lg-first mx-0 px-0 d-flex align-items-center">
            <div className=" align-items-center mt-5 mt-lg-0">
              <p className="text_dark forms_font_0 forms_font_0_mobile text-start">
                Insurance
              </p>
              <p className="text-6a6a6a forms_font_1 forms_font_1_mobile ">
                We accept most major insurance plans:
              </p>
              
              <div className="row mx-0 px-0">
                <div className="col-1 mx-0 px-0 display-flex align-items-start">
                <img
                  src={require("../../images/InsuranceandForms/Vector.png")}
                  alt="img"
                  className="img-fluid "
                ></img>
                </div>
                <div className="col-11">
                <p className="forms_font_li forms_font_li_mobile text-start text_dark">
                
                Medicare
                </p>
                </div>
              </div>
              <div className="row mx-0 px-0">
                <div className="col-1 mx-0 px-0 display-flex align-items-start">
                <img
                  src={require("../../images/InsuranceandForms/Vector.png")}
                  alt="img"
                  className="img-fluid "
                ></img>
                </div>
                <div className="col-11">
                <p className="forms_font_li forms_font_li_mobile text-start text_dark">
                
                Aetna
                </p>
                </div>
              </div>
              <div className="row mx-0 px-0">
                <div className="col-1 mx-0 px-0 display-flex align-items-start">
                <img
                  src={require("../../images/InsuranceandForms/Vector.png")}
                  alt="img"
                  className="img-fluid "
                ></img>
                </div>
                <div className="col-11">
                <p className="forms_font_li forms_font_li_mobile text-start text_dark">
                
                Cigna
                </p>
                </div>
              </div>
              <div className="row mx-0 px-0">
                <div className="col-1 mx-0 px-0 display-flex align-items-start">
                <img
                  src={require("../../images/InsuranceandForms/Vector.png")}
                  alt="img"
                  className="img-fluid "
                ></img>
                </div>
                <div className="col-11">
                <p className="forms_font_li forms_font_li_mobile text-start text_dark">
                
                Florida Blue (Blue Cross Blue Shield)
                </p>
                </div>
              </div>
              <div className="row mx-0 px-0">
                <div className="col-1 mx-0 px-0 display-flex align-items-start">
                <img
                  src={require("../../images/InsuranceandForms/Vector.png")}
                  alt="img"
                  className="img-fluid "
                ></img>
                </div>
                <div className="col-11">
                <p className="forms_font_li forms_font_li_mobile text-start text_dark">
                
                United Healthcare
                </p>
                </div>
              </div>
              <div className="row mx-0 px-0">
                <div className="col-1 mx-0 px-0 display-flex align-items-start">
                <img
                  src={require("../../images/InsuranceandForms/Vector.png")}
                  alt="img"
                  className="img-fluid "
                ></img>
                </div>
                <div className="col-11">
                <p className="forms_font_li forms_font_li_mobile text-start text_dark">
                
                And several others. Please call to verify we accept your insurance plan when scheduling.
                </p>
                </div>
              </div>
              
              
            </div>
          </div>
          <div className="col-12 col-lg-6 mx-0 px-0 d-flex align-items-center">
            <div className="">
              <img
                src={require("../../images/InsuranceandForms/1.png")}
                className="img-fluid "
                alt="img"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row mx-0 px-0 py-5 ">
          <div className=" col-12 col-lg-6 mx-0 px-0 d-flex align-items-center">
            <div className="">
              <img
                src={require("../../images/InsuranceandForms/2.png")}
                className="img-fluid "
                alt="img"
              ></img>
            </div>
          </div>

          <div className="col-12 col-lg-6 mx-0 px-0 d-flex  justify-content-center mt-5 mt-lg-0">
            <div className=" align-items-center">
              <p className="text_dark forms_font_0 forms_font_0_mobile text-start">
                Forms
              </p>

              <p className="forms_font_li1 forms_font_li_mobile text-start text_dark  shadow px-2  px-sm-5 py-3"
              style={{cursor:'pointer'}}
              onClick={()=>
                window.location.href="https://drive.google.com/file/d/1QQgGxh3iEo9Jy5vt1J7dlJ46ajjtfcMi/view?usp=share_link"
              }>
                <img
                  src={require("../../images/InsuranceandForms/Vector1.png")}
                  alt="img"
                  className="img-fluid pe-4"
                ></img>
                New Patients Forms
              </p>
              {/* <p className="forms_font_li1 forms_font_li_mobile text-start text_dark shadow  px-2 px-sm-5 py-3">
                <img
                  src={require("../../images/InsuranceandForms/Vector1.png")}
                  alt="img"
                  className="img-fluid pe-4"
                ></img>
                Health History
              </p> */}
              <p className="forms_font_li1 forms_font_li_mobile text-start text_dark shadow  px-2 px-sm-5 py-3"
              style={{cursor:'pointer'}}
               onClick={()=>
                window.location.href="https://drive.google.com/file/d/1H6UR7DVyHzX76cwzrapMXQfPtgZxbNN2/view?usp=share_link"
              }>
                <img
                  src={require("../../images/InsuranceandForms/Vector1.png")}
                  alt="img"
                  className="img-fluid pe-4"
                ></img>
                Authorization for Release{" "}
              </p>
              <p className="forms_font_li1 forms_font_li_mobile text-start text_dark shadow  px-2 px-sm-5 py-3 cursor-pointer"
              style={{cursor:'pointer'}}
               onClick={()=>
                window.location.href="https://drive.google.com/file/d/1eqVUjOlH5e-ARbcCO70CRtTbcOeamqva/view?usp=share_link"
              }>
                <img
                  src={require("../../images/InsuranceandForms/Vector1.png")}
                  alt="img"
                  className="img-fluid pe-4"
                ></img>
                Notice of Privacy Practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;

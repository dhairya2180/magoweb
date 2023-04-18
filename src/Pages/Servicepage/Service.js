import React from "react";
import "./Service.css";
import Header from "../Header/Header";

const Service = () => {
  return (
    <>
      {/* <div className="container-fluid service_banner_img  ">
        <div className="row mx-0 px-0  d-flex align-items-center justify-content-start">
          <div className="col-10 mx-2 mx-lg-0 col-sm-8 mx-0 px-0  d-flex align-items-center justify-content-start justify-content-md-center ps-4 ">
            <div className="justify-content-center ps-md-5 ms-md-5 service_square_img ">
              <div className="">
                <p className="text-white service_banner_font1 service_banner_font1_mobile ">
                  Service
                </p>
              </div>

              <p className="text-white service_banner_font2  d-none d-md-block">
                Medical, Cosmetic, and Surgical Services
              </p>
            </div>
          </div>
          <div className="col-12 mx-2 mx-lg-0  col-sm-8 mx-0 px-0   d-flex align-items-center justify-content-start ">
            <div className="justify-content-center ps-4 ps-md-5 ms-md-5">
              <p className="text-white  service_banner_font2_mobile  d-md-none">
                Dermatology and Cosmetic Services
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container-fluid px-0 ">
        <div className="row mx-0 px-0 service_banner">
          <div className="col-10 col-sm-9 col-md-10  ms-4 ms-md-0 px-0 mx-0 my-5  service_square d-flex align-items-center justify-content-center">
            <div className="ps-3 ps-sm-0 ">
              <p className="text-white forms_font forms_font_mobile ps-md-5 ps-lg-0">
                Services
              </p>
              <p className="text-white forms_font1 forms_font_mobile1 ps-md-5 ps-lg-0">
                Medical, Cosmetic, and Surgical Services
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid service_position">
        <div className="row mx-0 px-0 ">
          <div className=" col-12 col-lg-6 mx-0 px-0">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={require("../../images/Services/service1.png")}
                alt="logo"
                className="img-fluid  service_img_size p-4 p-lg-0"
              />
            </div>
          </div>
          <div className=" col-12 col-lg-6 mx-0  ps-lg-5">
            <div className=" service_font2 service_font2_mobile  ps-md-5">
              <p className="text_dark service_sec1_font1 service_sec1_font1_mobile">
                General Dermatology
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <p class="my-md-3 my-3 d-flex justify-content-md-start  align-items-center about_sec2_btn about_sec2_btn_mobile">
                  Treatments
                </p>
              </div>

              <p className="text_3a3a3a">
                Common skin conditions that we treat:
              </p>
              <ul className="">
                <li className="">Acne</li>
                <li>Atopic Dermatics</li>
                <li>Eczema</li>
                <li>Hives</li>
                <li>Kelodis</li>
                <li>Moles & Spots</li>
                <li>Precancerous</li>
                <li>Psoriasis</li>
                <li>Rashes</li>
                <li>rosacea</li>
                <li>Skin Cancer</li>
                <ul>
                  <li className="listsyle">Basel cell carcinoma</li>
                  <li className="listsyle">squamous cell carcinoma</li>
                  <li className="listsyle">Melanoma</li>
                  <li className="listsyle">
                    And other rarer forms of skin cancers
                  </li>
                </ul>
                <li>Warts</li>
                <li>And many others</li>
              </ul>
              {/* <p className="text_3a3a3a">
                Common skin conditions that we treat:
              </p>
              <ul className="">
                <li>Skin Cancer Basal cell carcinoma</li>
                <li>quamous cell carcinoma</li>
                <li>Melanoma</li>
                <li>And other rarer forms of skin cancers</li>
              </ul>
              <p className="text_3a3a3a">Warts And many others</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid service_position">
        <div className="row mx-0 px-0 ">
          <div className=" col-12 col-lg-6 mx-0  ps-lg-5 d-flex order-last order-lg-first ">
            <div className=" service_font2 service_font2_mobile ps-2 ps-md-5 ps-lg-0">
              <p className="text_dark service_sec1_font1 service_sec1_font1_mobile">
                Cosmetic Dermatology
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <p class="my-md-4 my-4 d-flex justify-content-md-start  align-items-center about_sec2_btn about_sec2_btn_mobile">
                  Treatments
                </p>
              </div>
              <br />
              <ul className="">
                <li>Botox and Dysport for wrinkles</li>
                <li>Beauty mark removal</li>
                <li>Cosmetic mole and benign growth removal</li>
                <li>Scar revision</li>
                <li>Torn earlobe repair</li>
              </ul>
            </div>
          </div>

          <div className=" col-12 col-lg-6 mx-0 px-0">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={require("../../images/Services/service2.png")}
                alt="logo"
                className="img-fluid  service_img_size p-4 p-lg-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid service_position3 service_position">
        <div className="row mx-0 px-0 ">
          <div className=" col-12 col-lg-6 mx-0 px-0">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={require("../../images/Services/service3.png")}
                alt="logo"
                className="img-fluid  service_img_size p-4 p-lg-0"
              />
            </div>
          </div>

          <div className=" col-12 col-lg-6 mx-0  ps-lg-5 d-flex   ">
            <div className=" service_font2 service_font2_mobile ps-2  ps-md-5">
              <p className="text_dark service_sec1_font1 service_sec1_font1_mobile text-center">
                Surgical Dermatology
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
                <p class="my-md-4 my-4 d-flex justify-content-md-start  align-items-center about_sec2_btn about_sec2_btn_mobile">
                  Treatments
                </p>
              </div>

              

              <ul className="">
              <li className="mb-3">Skin cancer: we off both surgical and nonsurgical treatments</li>
                
                <ul className="mb-3">
                <li className="">
                  
                  Mohs Micrographic Surgery and reconstruction
                </li>
                <li>Standard Excision</li>
                <li>Lesion destruction</li>
                <li>And serveral others</li>
                </ul>
              
                <li className="text_3a3a3a ">Cyst removal</li>
              <li className="text_3a3a3a ">Lipomas</li>
                
              </ul>
             <ul>
              
             </ul>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if(window.innerWidth<1000)
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

  return (
    <Navbar
    expanded={expanded}
      className="container-fluid sticky-top shadow-sm   HeaderCss"
      expand="lg"
    >
      <Container>
        <Navbar.Brand onClick={()=>scrollToTop()}>
          <Link to="/" className="active" >
            <img
              src={require("../../images/Altamonte_Dermatology_logos/Altamonte Dermatology logos/Altamonte 512x512.jpg")}
              alt="logo"
              className="logoCss" style={{height: "100px" , width: "100px"}}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll "  onClick={handleToggle}/>
        <Navbar.Collapse
          id="navbarScroll"
          className="text-center bg-white pb-5 pb-lg-0"
        >
          <Nav className="mx-auto my-2 my-lg-0 "  navbarScroll onClick={()=>scrollToTop()}>
            <Nav.Link className="hoverClass"  onClick={handleToggle}>
              <Link to="/About" id="list" data-toggle="collapse" data-target=".navbar-toggler collapsed" >
                {" "}
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="hoverClass"  onClick={handleToggle}>
              <Link to="/Servicepage" id="list" activeClassName="is-active">
                {" "}
                Services
              </Link>
            </Nav.Link>
            <Nav.Link className="hoverClass"  onClick={handleToggle}>
              <Link to="/InsuranceAndForms" id="list" activeClassName="is-active">
                {" "}
                Insurance & Forms
              </Link>
            </Nav.Link>
            <Nav.Link className="hoverClass"  onClick={handleToggle}>
              <Link to="/Contact" id="list" activeClassName="is-active">
                {" "}
                Contact
              </Link>
            </Nav.Link>
            <div className="d-flex d-none d-lg-block align-items-center fw-bold h4 vrcolor" > | </div>
            <Nav.Link
             onClick={handleToggle}
              className="hoverClass"
              href="https://altamontedermatology.ema.md/"
            >
              {/* <Link id="list" activeClassName="is-active"> */}
              <Link to="https://altamontedermatology.ema.md/" id="list">
               Patient
              Portal
              </Link>
              {/* </Link> */}
            </Nav.Link>
            <Nav.Link
             onClick={handleToggle}
              className="hoverClass"
              href="https://altamontedermatology.ema.md/ema/pay/onlinepayments"
            >
              <Link to="https://altamontedermatology.ema.md/ema/pay/onlinepayments" id="list"> 
              Make a Payment
               </Link> 
            </Nav.Link>
          </Nav>
          <Navbar.Brand>
            <Link to="/Contact" className="customCss1"  onClick={handleToggle}>
              {" "}
              <button  type = "button" className="px-3 py-2  customCss" onClick={()=>window.location.href=`tel:4072602606`}>
                <img
                  src={require("../../images/Logo/11.png")}
                  className="iconWidth"
                />{" "}
                &nbsp;(407) 260-2606
              </button>{" "}
            </Link>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
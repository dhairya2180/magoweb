import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import About from "./Pages/About/About";
import Appointments from "./Pages/Appointments/Appointments";
import Service from "./Pages/Servicepage/Service";
import Contact from "./Pages/Contact/Contact";
import PatientPortal from "./Pages/PatientPortal/PatientPortal";
import MakePayment from "./Pages/MakePayment/MakePayment";


function App() {
  return (
    <>
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Servicepage" element={<Service />} />
        <Route path="About" element={<About />} />
        <Route path="InsuranceAndForms" element={<Appointments />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="PatientPortal" element={<PatientPortal />} />
        <Route path="MakePayment" element={<MakePayment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

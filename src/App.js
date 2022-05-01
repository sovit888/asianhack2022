import React from "react";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginIndividual from "./pages/individual/LoginIndividual";
import HomePage from "./pages/HomePage";
import RegisterIndividual from "./pages/individual/RegisterIndividual";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Organization from "./components/Organization";
import FundRaiser from "./pages/FundRaiser";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import Donor from "./components/Donor";
import Audit from "./components/Audit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/fund" element={<FundRaiser />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/organization/:id" element={<Organization />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/individual" element={<LoginIndividual />} />
          <Route path="/register/individual" element={<RegisterIndividual />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

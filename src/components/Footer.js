import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer-item">
        <p>Home</p>
        <p>About Us</p> <p>Contact</p>
      </div>
      <div className="footer-item">
        <p>Fund Raiser</p>
        <p>Project</p> <p>Location</p>
      </div>
      <div className="footer-item">
        <p>Refund</p>
        <p onClick={() => navigate("/donor")}>List Of Donor</p>{" "}
        <p onClick={() => navigate("/audit")}>Audit</p>
      </div>
    </div>
  );
};

export default Footer;

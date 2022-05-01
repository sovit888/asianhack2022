import React from "react";
import logo from "../suvidhasathi.png";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbars">
      <img src={logo} alt="suvidasathi" />
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About Us</li>
        <li onClick={() => navigate("/project")}>Projects</li>
        <li onClick={() => navigate("/contact")}>Contact Us</li>
      </ul>
      <div className="left" style={{ display: "flex" }}>
        <p
          className="m-0 text-white font-bold me-4"
          style={{ cursor: "pointer", fontWeight: "700" }}
          onClick={() => navigate("/login")}
        >
          Login/Register
        </p>
        <p
          className="m-0 text-white font-bold me-4"
          style={{ cursor: "pointer", fontWeight: "700" }}
          onClick={() => navigate("/fund")}
        >
          Fund Raiser
        </p>
        <FiShoppingCart
          style={{
            marginRight: "14px",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/shop")}
        />
      </div>
    </div>
  );
};

export default Navbar;

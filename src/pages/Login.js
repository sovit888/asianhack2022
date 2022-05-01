import React from "react";
import { Button } from "reactstrap";
import logo from "../suvidhasathi.png";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = (url) => (e) => {
    navigate(url);
  };
  return (
    <>
      <div className="login-wrapper">
        <div className="login-left">
          <img src={logo} alt="suvidha sathi" />
        </div>
        <div className="login-right">
          <p className="login-welcome-title text-greyish shadow">
            Welcome to Charity Nepal
          </p>
          <p>
            Charity Nepal is a donatting application helping for the people by
            the people......
          </p>
          <div className="py-3 mb-3">
            <Button
              className="d-block mx-auto bg-greyish text-greyish"
              onClick={handleClick("/login/individual")}
            >
              Login as Donee
            </Button>
            <Button
              className="d-block mx-auto my-3 bg-greyish text-greyish"
              onClick={handleClick("/login/individual")}
            >
              Login as Donor
            </Button>
          </div>
          <p
            className="text-greyish shadow"
            onClick={handleClick("/")}
            style={{ cursor: "pointer" }}
          >
            Know about our site
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

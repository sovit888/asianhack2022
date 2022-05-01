import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../suvidhasathi.png";
import "./login.css";

const LoginIndividual = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };
  return (
    <div className="login-individual">
      <img src={logo} />
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input
          type="email"
          id="email"
          value={value.email}
          onChange={handleChange("email")}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password:</Label>
        <Input
          type="password"
          id="password"
          value={value.password}
          onChange={handleChange("password")}
        />
      </FormGroup>

      <Button
        color="primary"
        className="d-block mx-auto mb-2"
        onClick={() => navigate("/")}
      >
        Submit
      </Button>
      <div className="text-center">
        <p>
          Dont have an Account?
          <span
            className="ms-2 text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/register/individual")}
          >
            Click
          </span>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default LoginIndividual;

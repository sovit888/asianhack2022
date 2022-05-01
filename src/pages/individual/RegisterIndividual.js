import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  FormText,
} from "reactstrap";
import logo from "../../suvidhasathi.png";
import { useNavigate } from "react-router-dom";
import "./login.css";

const RegisterIndividual = () => {
  const navigate = useNavigate();
  const [donor, setDonor] = useState(false);
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };
  return (
    <div className="register-individual">
      <img src={logo} />
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              id="email"
              value={value.email}
              onChange={handleChange("email")}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              type="password"
              id="password"
              value={value.password}
              onChange={handleChange("password")}
            />
          </FormGroup>
        </Col>{" "}
        <Col md={6}>
          <FormGroup>
            <Label for="full_name">Full Name:</Label>
            <Input
              type="text"
              id="full_name"
              value={value.password}
              onChange={handleChange("password")}
            />
          </FormGroup>
        </Col>{" "}
        <Col md={6}>
          <FormGroup>
            <Label for="gender">Gender:</Label>
            <Input type="select" id="gender">
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </Input>
          </FormGroup>
        </Col>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              onChange={(e) => setDonor(e.target.checked)}
            />
            Individual
          </Label>
        </FormGroup>
        {donor ? (
          <>
            {" "}
            <Col md={6}>
              <FormGroup>
                <Label for="full_name">Hospital Name:</Label>
                <Input
                  type="text"
                  id="full_name"
                  value={value.password}
                  onChange={handleChange("password")}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="gender">Patient No.:</Label>
                <Input
                  type="text"
                  id="full_name"
                  value={value.password}
                  onChange={handleChange("password")}
                />
              </FormGroup>
            </Col>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                Please upload passport or citizenship
              </FormText>
            </FormGroup>
          </>
        ) : (
          <>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                Please upload Pan or VATdocument
              </FormText>
            </FormGroup>
          </>
        )}
      </Row>

      <Button color="success w-50 my-2" className="d-block mx-auto mb-2">
        Submit
      </Button>
      <div className="text-center">
        <p>
          Already an Account?
          <span
            className="ms-2 text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login/individual")}
          >
            Click
          </span>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default RegisterIndividual;

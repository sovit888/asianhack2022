import React from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <h3 className="text-center py-4">Contact Us</h3>
      <div className="w-50 mx-auto">
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Full Name</Label>
          <Input type="text" id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Message</Label>
          <Input type="textarea" id="email" />
        </FormGroup>
        <Button color="success d-block mx-auto w-25">Submit</Button>
      </div>
    </>
  );
};

export default Contact;

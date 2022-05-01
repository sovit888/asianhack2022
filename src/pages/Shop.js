import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Navbar from "../components/Navbar";
import pic from "../krishna.png";
import Swal from "sweetalert2";
import "./fundraiser.css";

const Shop = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>List of Donee</ModalHeader>
        <ModalBody>
          <Input type="select">
            <option>Amako Ghar</option>
            <option>Thridt Store</option>
            <option>Ramesh</option>
            <option>Prays Nepal</option>
          </Input>
          <h4 className="py-4">Total Price is 10000</h4>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                Swal.fire("Great job!", "You have Donated", "success");
              }, 1000);
            }}
          >
            Pay
          </Button>
          <Button color="warning" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Navbar />
      <h4
        className="text-center py-3"
        style={{ color: "red", textDecoration: "underline" }}
      >
        Buy and Donate
      </h4>
      <Container>
        <div className="grid-layout">
          {Array(3)
            .fill()
            .map((_, index) => {
              return (
                <div className="widgets">
                  <img src={pic} />
                  <Input type="text" placeholder="qnuatity" className="my-2" />
                  <Button
                    className="d-block mx-auto"
                    style={{ backgroundColor: "red" }}
                    onClick={() => setOpen(true)}
                  >
                    Donate
                  </Button>
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default Shop;

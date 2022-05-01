import React, { useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import {
  Button,
  Container,
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader,
  Input,
} from "reactstrap";
import Swal from "sweetalert2";

const Organization = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Donation</ModalHeader>
        <ModalBody>
          <Input type="text" placeholder="Enter amount" />
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
      {id === "abc" && (
        <>
          <Container>
            <h3 className="text-center py-4">ABC</h3>
            <p>
              {" "}
              (ABC Nepal)Agroforestry, Basic Health, and Cooperative Nepal: is a
              nonprofit, non governmental organisation working in Nepal that
              focuses on women's rights and works against human trafficking in
              Nepal. Created in 1987, ABC Nepal was among the first Non
              Governmental Organisations established in Nepal. It was registered
              soon after the introduction of Nepalese multiparty democracy in
              1991. The president of the organisation is Durga Ghimire.
            </p>
            <p>
              ABC Nepal has operated rehabilitation homes in Kathmandu,
              Bhairahawa, and Biratnagar to provide shelter to victims of
              trafficking and violence against women.the group monitored the
              Tribhuvan International Airport, establishing a help desk in major
              border transit.
            </p>
          </Container>
        </>
      )}
      {id === "amakoghar" && (
        <>
          <Container>
            <h3 className="text-center py-4">Amako Ghar</h3>
            <p style={{ fontSize: "20px" }}>
              <span style={{ fontWeight: "bold" }}>AamakoGhar</span> :<br />
              Mother's House," established 1999) is a non-profit organisation
              established to shelter homeless senior citizens and children of
              Nepal. It was founded by Dil Shova Shrestha
            </p>
          </Container>
        </>
      )}
      {id === "prayasnepal" && (
        <>
          <Container>
            <h3 className="text-center py-4">Prays Nepal</h3>
            <p>
              .Prayas Nepal is a non-profit, non-governmental organization in
              Nepal. It is registered with the District Administrative Office of
              Kathmandu. Prayas Nepal aims to protect the rights of children and
              the underprivileged including orphans, women and elderly in Nepal
              by helping them to access essential services such as education and
              health care.
            </p>
          </Container>
        </>
      )}
      {id === "dhurmusuntali" && (
        <>
          <Container>
            <h3 className="text-center py-4">Dhurmus Suntali</h3>
            <p>
              Dhurmus Suntali Foundation is a Nepalese charity founded primarily
              for victims of 2015 Nepali earthquakes. Since then, the foundation
              has expanded its projects like Gautam Buddha International Cricket
              Stadium. The charity was founded by well-known Nepalese comedians
              Sitaram Kattel and Kunjana Ghimire.Famous persons like Rekha Thapa
              and those from different countries have contributed to this
              charity.
            </p>
          </Container>
        </>
      )}
      {id === "hamrobazar" && (
        <>
          <Container>
            <h3 className="text-center py-4">Hamro Bazar</h3>
            <p>Hamro bazar is an online buy and sell group</p>
          </Container>
        </>
      )}
      {id === "thriftstore" && (
        <>
          <Container>
            <h3 className="text-center py-4">Thrift Store</h3>
            <p>
              Thrift store a Nepal second-hand clothing store is a consignment
              store that buy, sell and donate clothes. Why thrift when one can
              just by something new?.Its main objective is to reuse the second
              hand goods on the cheapers price, Also thrifting minimizes the
              waste So, you can buy, sell or donate clothes in affordable price.
            </p>
          </Container>
        </>
      )}
      {id === "merosecond" && (
        <>
          <Container>
            <h3 className="text-center py-4">Mero Second Hand</h3>
            <p>
              Merosecondhand.com is free buy,sell,rent and exchange platform of
              nepal. Publish your items advertisements for free, creat an
              account and start selling from right now. Posting your advertise
              is free of cost. Search items of all categories, it's simple and
              fast.
            </p>
          </Container>
        </>
      )}
      {id === "sastoramro" && (
        <>
          <Container>
            <h3 className="text-center py-4">Sasto Ramro</h3>
            <p>
              Sastoramro is a Free classified ad site & business listing for
              anything ranging from cars, bikes to houses & lands. Users can
              sell, buy anything online in Nepal.
            </p>
          </Container>
        </>
      )}
      <Button
        color="success"
        className="d-block mx-auto w-25 my-3"
        onClick={() => setOpen(true)}
      >
        Donate
      </Button>
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="mt-4 mb-5"
      >
        <h4 className="text-center">Total Money: 5000</h4>
        <h4 className="text-center">Total Donor: 5000</h4>
      </div>
    </>
  );
};

export default Organization;

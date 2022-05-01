import React from "react";
import { Container } from "reactstrap";
import Navbar from "../components/Navbar";
import image from "../heart.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <img
          src={image}
          style={{ width: "100%", height: "auto", aspectRatio: "16/9" }}
        />
        <h3 className="text-center my-5">About Us</h3>
        <p>
          Charity Nepal connects nonprofits, profits,donors,donee throughout the
          Country . We Help fellow organization access the funding, tools,
          training, and support that they need to make our world a better place.
          We tackle the problem like:
          <br /> 1. Misuse of Donation <br />
          2)Negligence of basic needs of the needy people <br />
          3. Insecure donation system with improper verification of donee <br />
          4. Lack of verified fundraising platform We link donor and donee and
          provide basic needs for the needy people.Charity Nepal provide
          help/shelter facilities for old people, children and differently abled
          person for their welfare. Also our platform provide proper tracking
          system of donation.Moreover,we operate with honesty & integrity.
        </p>
      </Container>
    </>
  );
};

export default About;

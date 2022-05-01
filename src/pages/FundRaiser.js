import React from "react";
import Navbar from "../components/Navbar";
import scanner from "../scanner.png";

const FundRaiser = () => {
  return (
    <>
      <Navbar />
      <h4 className="text-center py-3">Purpose of Fund Raiser</h4>
      <p style={{ width: "80%", margin: "16px auto", fontSize: "20px" }}>
        In a fund raiser you can donate a money directly to our organisation for
        better enhancement of our site Also when you are awareless of our site
        yoj can donate money we will utilize these money for natural calimites
        and natural disasters purpose As well as in emergency purpose we will
        use the money of fundraiser
      </p>
      <h4 className="text-center py-3" style={{ color: "red" }}>
        Our Banking Transactions
      </h4>
      <p style={{ width: "80%", margin: "16px auto", fontSize: "20px" }}>
        Bank: Sunrise Bank LTd
      </p>
      <p style={{ width: "80%", margin: "16px auto", fontSize: "20px" }}>
        Account Name: Donor
      </p>
      <p style={{ width: "80%", margin: "16px auto", fontSize: "20px" }}>
        Account Number: 0001234i85y5yy5y2
      </p>
      <h4 className="text-center py-3" style={{ color: "red" }}>
        We Accept Fone Pay
      </h4>
      <img src={scanner} className="mx-auto d-block" />
    </>
  );
};

export default FundRaiser;

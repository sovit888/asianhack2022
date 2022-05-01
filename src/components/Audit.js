import React from "react";
import Navbar from "./Navbar";
import rec from "../rec.png";

const Audit = () => {
  return (
    <>
      <Navbar />
      <h3 className="text-center my-4">Audit of January 1 to 30 </h3>
      <img src={rec} className="d-block mx-auto" />
    </>
  );
};

export default Audit;

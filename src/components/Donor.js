import React from "react";
import { Container, Table } from "reactstrap";
import Navbar from "./Navbar";

const Donor = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h3 className="text-center my-4">List Of Donors</h3>
        <Table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Amount</th>
              <th>Reveived By</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sovt Thapa</td>
              <td>1000</td>
              <td>Ama Ko Ghar</td>
            </tr>
            <tr>
              <td>Anjila Thapa</td>
              <td>100</td>
              <td>Prayas Nepal</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Donor;

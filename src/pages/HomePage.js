import React from "react";
import { Button } from "reactstrap";
import Navbar from "../components/Navbar";
import {
  organizationLists,
  profitorganizationLists,
} from "../components/organizationlist";
import { useNavigate } from "react-router-dom";
import { FaDonate } from "react-icons/fa";
import "./homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <h3 className="text-center py-3">Non Profitable Organizations</h3>
      <div className="homepage-nonprofit">
        {organizationLists.map((value, index) => {
          return (
            <div className="cards" key={index}>
              <img
                src={
                  value.src
                    ? value.src
                    : "https://media.istockphoto.com/photos/red-play-icon-button-on-white-background-social-media-and-sign-3d-picture-id1348212541?b=1&k=20&m=1348212541&s=170667a&w=0&h=6L67l228RvKoBbEzcw7LtfZDspPL3AQP4P9QZmeziIQ="
                }
                onClick={() => navigate(value.link)}
              />
              <FaDonate />
              <p className="mt-2">{value.name}</p>
            </div>
          );
        })}
      </div>
      <h3 className="text-center py-3">Profitable Organizations</h3>
      <div className="homepage-nonprofit">
        {profitorganizationLists.map((value, index) => {
          return (
            <div className="cards" key={index}>
              <img
                onClick={() => navigate(value.link)}
                src={
                  value.src
                    ? value.src
                    : "https://media.istockphoto.com/photos/red-play-icon-button-on-white-background-social-media-and-sign-3d-picture-id1348212541?b=1&k=20&m=1348212541&s=170667a&w=0&h=6L67l228RvKoBbEzcw7LtfZDspPL3AQP4P9QZmeziIQ="
                }
              />
              <FaDonate />
              <p className="mt-2">{value.name}</p>
            </div>
          );
        })}
      </div>
      <h3 className="my-4 text-center">Individual</h3>
      {Array(2)
        .fill()
        .map((_, index) => {
          return (
            <div className="posts">
              <div className="post-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore dolores voluptates, similique odit voluptate
                  blanditiis eum. Doloremque facilis qui laudantium. Voluptatum
                  magni doloremque autem nisi illo quos? Esse, vitae in!
                </p>
                <p className="text-end m-0">Anil Rana</p>
                <p className="text-end m-0">Patient No: 114</p>{" "}
                <p className="text-end m-0">Grande</p>
              </div>
              <div>
                <Button color="primary">Donate</Button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default HomePage;

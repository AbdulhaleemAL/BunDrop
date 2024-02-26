import React from "react";
import Navbar from "../Components/Navbar";
import "../Services/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="text-container">
          <h1>Fast Delivery!</h1>
          <Link to={"/menu"}>
            <button className="btn-order">Order Now</button>
          </Link>
        </div>
        <div>
          <img
            src="/Images/Burger_HomePage.png"
            alt="Burger"
            className="burger-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

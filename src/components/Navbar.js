import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <img src="https://i.ibb.co/ZJ84BRV/Genesys-Logo.png" alt="genesys logo" />
      <ul className="navbar_ul">
        <li className="navbar_li">
          {" "}
          <a href="#">LEARNABLE </a>{" "}
        </li>
        <li className="navbar_li">
          {" "}
          <a href="#">AGORA </a>{" "}
        </li>
        <li className="navbar_li">
          {" "}
          <a href="#"> STARTZONE</a>{" "}
        </li>
        <li className="navbar_li">
          {" "}
          <a href="#">ABOUT </a>{" "}
        </li>
        <li className="navbar_li">
          {" "}
          <a href="#">CONTACT </a>{" "}
        </li>
      </ul>
      <p>build a product with</p>
      <button>DEVSTUDIO</button>
    </div>
  );
};

export default Navbar;

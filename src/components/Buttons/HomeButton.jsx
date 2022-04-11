import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

const HomeButton = () => {
  return (
    <Link to="/">
      <button className="button">Home</button>
    </Link>
  );
};

export default HomeButton;

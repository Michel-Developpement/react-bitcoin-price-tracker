import React from "react";
import bitcoin from "../assets/bitcoin.png";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <img src={bitcoin} alt="bitcoin" className={classes.logo} />
      <h1 className={classes.title}>Bitcoin Price Tracker</h1>
    </div>
  );
}

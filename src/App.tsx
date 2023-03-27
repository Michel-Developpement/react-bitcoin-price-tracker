import React from "react";
import Bitcoin from "./components/Bitcoin";
import bitcoin from "./assets/bitcoin.png";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="logo-scale">
        <img className="logo" src={bitcoin} alt="logo bitcoin" />
      </div>
      <br />
      <br />
      <Bitcoin />
    </div>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./Routers.js";
import "./App.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "./Vendor.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routers />
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componets/Navbar";

//import './login';
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <body>
        <br></br>
        <h1><b><center>WELCOME TO DHIS2 TRACKER CAPTURE</center></b></h1>
        <br></br>
        </body>
      </div>
    );
  }
}

export default App;

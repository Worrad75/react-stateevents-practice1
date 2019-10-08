import React, { Component } from "react";
// import logo from "./logo.svg";
import DogsList from "../src/Containers/DogsList";
import "./App.css";

class App extends Component {
  render() {
    
    return (
      <div>
        {/* {logo} */}
        <DogsList />
      </div>
    );
  }
}

export default App;

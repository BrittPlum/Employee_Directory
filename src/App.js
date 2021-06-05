
import React, { Component } from "react";
import API from "./utils/API";
import Directory from "./components/Directory";
import Wrapper from "./components/Wrapper";
import './App.css';

class App extends Component{
  state={employees: []}

  componentDidMount() {
    API.exportEmployees()
  }
  render() {
  return (
    <div> 
    <Wrapper >
      <Directory />
      </Wrapper>
    </div>
    );
}
}
export default App;

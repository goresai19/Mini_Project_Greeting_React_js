
// importing the react and the react-dom
import React from "react";
import ReactDOM from "react-dom";
//importing the css files for the index.js
import './index.css';
//importing the app component
import App from "./App";

/* Using the reactdom.render message to diaplay the content when the element by id root is called in the index.html */
ReactDOM.render(
  //using the app component
  <App/>,
document.getElementById("root")
);

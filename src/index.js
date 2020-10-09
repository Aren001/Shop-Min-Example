import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context";


//RoomProvider-y chgrenq Featured Room -y chi ashxati
ReactDOM.render(<ProductProvider><Router><App/></Router></ProductProvider>, document.getElementById('root'));


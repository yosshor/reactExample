import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Students from "./Students.jsx";
import Counter, {
  CounterUpdateFunction,
} from "./Components/Counter/Counter.jsx";
import StarRating from './Components/star-rating/index.jsx' 
// import AppPage from "./Pages/AppPage.jsx";
import Accordian from "./Components/Accordian/index.jsx";
import RandomColor from "./Components/random-color/index.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Accordian /> */}
    {/* <RandomColor /> */}
    <StarRating stars={10}/>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Students from "./Students.jsx";
import Counter, {
  CounterUpdateFunction,
} from "./Components/counter/Counter.jsx";
import StarRating from './Components/star-rating/index.jsx' 
// import AppPage from "./Pages/AppPage.jsx";
import Accordian from "./Components/accordian/index.jsx";
import RandomColor from "./Components/random-color/index.jsx";
import ImageSlider from "./Components/image-slider/index.jsx"
import LoadMoreData from "./Components/load-more-data/index.jsx"



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Accordian /> */}
    {/* <RandomColor /> */}
    {/* <StarRating stars={10}/> */}
          {/* Image slider component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"2"}
        limit={"10"}
      />

      <LoadMoreData />
  </React.StrictMode>
);

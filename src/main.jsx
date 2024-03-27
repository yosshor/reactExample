import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
// import "./index.css";
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
import menus from "./Components/tree-view/data.js";
import TreeView from "./Components/tree-view/index.jsx";
import QRCodeGenerator from "./Components/qr-code-generator/index.jsx";
import LightDarkMode from "./Components/dark-light-mode/index.jsx"
import ScrollIndicator from "./Components/scroll-indicator/index.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  // <LightDarkMode />
  <>
    {/* // <LightDarkMode /> */}
    <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    {/* <LoadMoreData /> */}
    </>
  // <QRCodeGenerator />
  // <TreeView menus = {menus}/>
  
  );
  
  {/* <React.StrictMode>*/}

  {/* <Accordian /> */}
   {/* <RandomColor /> */}
   {/* <StarRating stars={10}/> */}
   {/* Image slider component */}
   {/* <ImageSlider
       url={"https://picsum.photos/v2/list"}
       page={"2"}
       limit={"10"}
     /> */}
       {/* </React.StrictMode>*/}
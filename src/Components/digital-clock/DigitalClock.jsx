import React, { useEffect, useState } from "react";
import "./DigitalClock.css";
import reactLogo from "/src/assets/react.svg";

export default function DigitalClock() {
    const [time, setTime] = useState(new Date());
  
    document.title = "Yoss Shor"; // time 
  
    useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date(), 1000)     
    }, 1000);
    return () => {
        clearInterval(intervalId);
    }
    }, []);


  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let format = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12
    
    return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}` ; 

    function padTime(number){
        return (number < 10 ? "0" : "") + number;
    }
  }


  return (
    <div className="colck-container">
      <div className="clock">
        <a className="logo">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <span>{formatTime()}</span>
        <a className="logo">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

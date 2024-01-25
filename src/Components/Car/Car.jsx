import './Car.css'
import React, { useState } from "react";

export default function Car() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const handleYearChange = (event) => {
    setCar({...car, year : event.target.value});
  }

  const handleMakeChange = (event) => {
    setCar({...car, make : event.target.value})
  }
  const handleModelChange = (event) => {
    setCar({...car, model : event.target.value})
  }

  const handleResetChange = () =>{
    setCar({ year: new Date().getFullYear(), make: "Subaru", model: "C4" });
}
  return <div className='container'>
    <p className='car-status'>Your favorite car is : {car.year} {car.make} {car.model}</p>
    <input className='car-input' type="number" onChange={handleYearChange} value={car.year}/><br/>
    <input className='car-input' type="text" onChange={handleMakeChange} value={car.make}/><br/>
    <input className='car-input' type="text" onChange={handleModelChange} value={car.model}/><br/>
    <button className='car-button' onClick={handleResetChange}>Reset</button>
  </div>;
}

import './Car.css'
import React, { useState } from "react";

export default function Car() {
  // const [car, setCar] = useState({
  //   year: 2024,
  //   make: "Ford",
  //   model: "Mustang",
  // });
  const [cars, setCars] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");

  const handleAddModel = () => {
    if(year == '' || model == '' || make == '') {
      alert('Please Fill The All Fields'); 
      return
    };
    const newCar = {
            year: year,
            model: model,
            make: make
    };
    setCars(c => [...c, newCar]);
    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }

  const handleYearChange = (event) => {
    // setCar({...car, year : event.target.value});
    setYear(c => event.target.value)
  }

  const handleMakeChange = (event) => {
    //   setCar({...car, make : event.target.value})
    setMake(c => event.target.value)
  }
  const handleModelChange = (event) => {
    // setCar({...car, model : event.target.value})
    setModel(c => event.target.value);
  }

  const handleResetChange = () => {
    setCars([]);
    setYear(c => 2020);
  }

  const handleRemoveCar = (index) => {
    console.log(index);
    setCars(c => cars.filter((car, i) => i !== index));
  }

  return <div>
    {/* <p className='car-status'>Your favorite car is : {car.year} {car.make} {car.model}</p> */}
    <h2>List of Cars:</h2>
    <ul>
      {cars.map((car, i) => (<li key={i} onClick={() => handleRemoveCar(i)}>{car.year},{car.make},{car.model}</li> ))}<br />
    </ul>
    <input className='car-input' type="number" onChange={handleYearChange} value={year} /><br />
    <input className='car-input' type="text" onChange={handleMakeChange} value={make} /><br />
    <input className='car-input' type="text" onChange={handleModelChange} value={model} /><br />
    <button className='car-button' onClick={handleAddModel}>Add</button>
    <button className='car-button' onClick={handleResetChange}>Reset</button>
  </div>;
}

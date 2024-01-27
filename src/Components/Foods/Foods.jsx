import React, { useState } from "react";
import './Foods.css';

export default function Foods() {
  const foodsList = ["Apple", "Banana", "Orange"];
  const [foods, setFoods] = useState(foodsList);

  const checkUserInputValue = (input, buttonId) => {
    if(input === "" || input.length <= 4) 
    {
        console.log(input);
        alert("Please insert Element bigger than 4 char") ;
        document.getElementById(buttonId).value = '';
        return false;
    }
    return true;
  }


  const handleAddFoods = () => {
    const newFoods = document.getElementById("foodInput").value;
    console.log(newFoods.length);
    if(!checkUserInputValue(newFoods,'foodInput')) return;
    document.getElementById('foodInput').value = '';
    //setFoods([...foods, newFoods]);
    setFoods(f => [...f, newFoods]); // updater function
  };

  const handleResetChange = () => {
    setFoods(f => foodsList);
  }

  const handleRemoveFoods = (index) => {
    console.log(foods.filter((_, i) => i != index));
    setFoods(foods.filter((_, i) => i != index));
  };


  return (
    <div style={{ display: "inline-flex" }}>
      <div>
        <h2>List Of Foods</h2>
        <ul>
          {foods.map((food, index) => 
            <li key={index} onClick={() => handleRemoveFoods(index)}>{food}</li>
          )}
        </ul>
        <input id='foodInput' type='text' placeholder="Enter Your Food"></input>
        <button  onClick={handleAddFoods}>Add Food</button>
        <button  onClick={handleResetChange}>Reset Food</button>
      </div>
    </div>
  );
}

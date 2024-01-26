import React, { useState } from "react";

export default function Foods() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

  const handleAddFoods = () => {
    const newFoods = document.getElementById("foodInput").value;
    console.log(newFoods);
    document.getElementById('foodInput').value = '';
    setFoods([...foods, newFoods]);
  };

  const handleRemoveFoods = () => {};
  return (
    <div style={{ display: "inline-flex" }}>
      <div>
        <h2>List Of Foods</h2>
        <ul>
          {foods.map((food, index) => 
            <li key={index}>{food}</li>
          )}
        </ul>
        <input id='foodInput' type='text' placeholder="Enter Your Food"></input>
        <button  onClick={handleAddFoods}>Add Food</button>
      </div>
    </div>
  );
}

import React, { useState ,useEffect} from "react";
import './ColorPicker.css'

export default function ColorPicker() {
  const [color, setColor] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize",handleResize);
    console.log("Event listener added");
    return () => {
      window.removeEventListener("resize",handleResize);
      console.log("event listener removed")
    }
  },[])

  useEffect(() => {
    document.title = `Size : ${width} x ${height}`
  })

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (

    <div className="color-picker-container">
      <p>Width : {width}</p>
      <p>Height : {height}</p>
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected color : {color}</p>
      </div>
      <label>Select a Color</label>
      <input type="color" value={color} onChange={handleColorChange}></input>
    </div>
    );
}

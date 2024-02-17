import React, {useState, useEffect} from "react";

export default function RandomColor(){
    const [color, setColor] = useState("#000000")
    const [hexOrRgb, setHexOrRgb] = useState("Hex ")
    
    function GenerateRandomNum(length){
        return Math.floor(Math.random() * length); 
    }
    
    function handleHexColor(){
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#"
        for(let i = 0; i < 6; i++){
            hexColor += hex[GenerateRandomNum(hex.length)];
        }
        console.log(hexColor);
        setHexOrRgb("Hex ");
        setColor(hexColor)
    }

    function handleRgbColor(){
        const r = GenerateRandomNum(256);
        const g = GenerateRandomNum(256);
        const b = GenerateRandomNum(256);
        setColor(`rgb(${r},${g},${b})`);
        setHexOrRgb("RGB ");
        console.log(`rgb(${r},${g},${b})`);
    }
    
    return (<div style={{width:"100vw",
                        height:"100vh",
                        backgroundColor:color }}>
        <button onClick={handleHexColor} style={{backgroundColor:"" }}>Generate HEX color</button>
        <button onClick={handleRgbColor} style={{backgroundColor:"" }}>Generate RGB color</button>
        <h1>{hexOrRgb} Color</h1>
        <h1> {hexOrRgb.trim() === 'RGB' ? null : hexOrRgb} {color}</h1>
    </div>)
}
// }() => setTypeOfColor("hex")
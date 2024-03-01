import React, { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultVal) {
  const [val, setVal] = useState(getValue(key, defaultVal));

  function getValue(key, defaultVal){
    let currentVal;
    try
    {
      console.log(localStorage.getItem(key));
      currentVal = JSON.parse(localStorage.getItem(key) || String(defaultVal));
      console.log(`inside try statement ${currentVal}`);
    } 
    catch (error)
    {
      currentVal = defaultVal;
      console.log(error);
    }
    console.log(`the currentVal = ${currentVal  }`)
    return currentVal;
  } 


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
    console.log(key, JSON.stringify(val));
  }, [key, val]);

  return [val, setVal];
}

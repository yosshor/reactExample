import React, { useEffect, useState } from "react";
import './Counter.css'

//useEffect() = react hook that tells React do some code when (pick one):
//      this component re-renders
//      this component mounts
//      the state of a value

//useEffect(function, [depedencies])

// 1.useEffect(() => {})          //runs after every re-render
// 2.useEffect(() => {},[])       //runs only on mount 
// 3.useEffect(() => {},[value])  //runs on mount + when value change

//USES
// #1 event listener
// #2 dom manipulation
// #3 subscriptions (real time updates)
// #4 fetching data from an api
// #5 clean up whena component unmounts


export default function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  //document.title = `Count : ${count}-${color}` //every change in the count title will change
  document.cookie = "username=Max Brown";;
  document.cookie = "username=Debra White; path=/";
  document.cookie = "userId=wjgye264s; ";
  document.cookie = "title = `${document.title}`"; 

  let cookies = document.cookie;
  console.log(`cookie = ${cookies}`);
  
  useEffect(() => {
    document.title = `Count : ${count}-${color}` //every change in the count title will change
      //if i put [] it will render once
      //if i put [count] it will render only when i changed the count num
      , [count,color]
  });

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const changeColor = () => {
    setColor(c => c === "green" ? "red" : "green");
  }

  return (<div className="counter-container">
    <p className="count-display" style={{ color: color }}>{count}</p>
    <button className="counter-button" onClick={decrement}>Decrement</button>
    <button className="counter-button" onClick={reset}>Reset</button>
    <button className="counter-button" onClick={increment}>Increment</button>
    <button className="counter-button" onClick={changeColor}>changeColor</button>
  </div>);
}

export function CounterUpdateFunction() {

  const [count, setCount] = useState(0);

  const increment = () => {
    console.log('increment')
    console.log(count)
    setCount(c => c + 1);
    console.log(count)
    setCount(c => c + 1);
  }
  const decrement = () => {
    console.log('decrement')
    setCount(c => c - 1);
    console.log(count)
    setCount(c => c - 1);
    console.log(count)
    setCount(c => c - 1);
  }

  const reset = () => {
    console.log('reset')
    setCount(0);

  }
  // const reset = () => {
  //   setCount(0);
  // } 
  // function reset{
  //   setCount(0);
  // }
  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement} >Decrement</button>
      <button onClick={reset} >Reset</button>
      <button onClick={increment} >Incerement</button>
    </div>
  )

}

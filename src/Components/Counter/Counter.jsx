import React, { useState } from "react";
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return ( <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
  </div>);
}

export  function CounterUpdateFunction(){

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
 
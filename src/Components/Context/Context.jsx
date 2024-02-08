import React, { useContext, useEffect, useRef, useState } from "react"

export default function Context() {
    let [num, setNum] = useState(0)
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const [input3, setInput3] = useState(0)
    
    const inputRef1 = useRef(0);
    const inputRef2 = useRef(0);
    const inputRef3 = useRef(0);

    const ref = useRef(null);
    // console.log(inputRef);

    useEffect(() => {
        console.log("Dom render")
    },[])
    
    function handleNum() {
        ref.current++
        console.log(ref.current)

        // setNum(n => n + 1)
        // console.log(num)
    }
    function handleRef1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
        console.log(inputRef1.current);
        // setInput(i => inputRef.current)
    }

    function handleRef2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "red";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
        console.log(inputRef2.current);
        // setInput(i => inputRef.current)
    }

    function handleRef3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "green";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
        console.log(inputRef3.current);
        // setInput(i => inputRef.current)
    }

    function handleRefValue1(event){
        setInput1(i => event.target.value * 2);
        console.log(""); 
    }

    function handleRefValue2(event){
        setInput2(i => event.target.value * 2);
    } 

    function handleRefValue3(event){
        setInput3(i => event.target.value * 2);
    }
    function buildButton(){
        return (
            <div>
                <button style={{margin:"0px", textAlign:"center"}}>click me new</button>
            </div>
        )
    }

    return (<div>
        <button onClick={handleRef1}>Click me</button>
        <input onChange={handleRefValue1} ref={inputRef1} type="number"/>
        <br />
        <label >The input is : {input1}</label>
        <br />

        <button onClick={handleRef2}>Click me</button>
        <input onChange={handleRefValue2} ref={inputRef2} type="number"/>
        <br />
        <label >The input is : {input2}</label>
        <br />

        <button onClick={handleRef3}>Click me</button>
        <input onChange={handleRefValue3} ref={inputRef3} type="number"/>
        <br />
        <label >The input is : {input3}</label>

        <br />
        <button onClick={buildButton}>add button</button>

    </div>)

}


function TryContext() {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)

    document.title = { count }

    const handleCount = () => {
        setCount(c => num);
    }
    const handleNum = (event) => {
        setNum(event.target.value)
    }
    return (<div>
        <label>{num}</label>
        <input onChange={handleNum} placeholder="insert your num" type="number" />
        <button onClick={handleCount}>Click me!</button> <br />
        <label>Your num is : {count}</label>

    </div>)
}
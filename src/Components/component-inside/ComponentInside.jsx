import React, { useState, useEffect, useContext } from "react";

export default function ComponentInside1() {
  const [user, setUser] = useState("Yossi Shor");

  return (
    <div>
      <h1>Hello from Component1 {user}</h1>
      <Component2 user={user}/>
    </div>
  );
}

function Component2({ user }) {
  return (
    <div>
      <h1>Hello from Component 2 {user}</h1>
      <Component3 user={user}/>
    </div>
  );
}
function Component3({ user }) {
  return (
    <div>
      <h1>Hello from Componet 3 {user}</h1>
        <Component4 user={user}/>
    </div>
  );
}
function Component4({user}){
    return <div>
        <h1>Hello from Componet4 {user}</h1>
    </div>
}
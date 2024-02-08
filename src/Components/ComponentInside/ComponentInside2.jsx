import React, { useState, useEffect, useContext, createContext } from "react";

const UserContext = createContext();

export default function ComponentInside2() {
  const [user, setUser] = useState("Yossi Shor Context");
  const [count, setCount] = useState(123);
  const [lastName, setLastName] =useState("Shor")
  return (
    <UserContext.Provider value={{ user, count, lastName}}>
      <div>
        <h1>Hello {user}</h1>
        <Component2 user={user} count={count} />
      </div>
    </UserContext.Provider>
  );
}

function Component2() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Hello {user} from component 2</h1>
      <Component3 />
    </div>
  );
}

function Component3() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Hello {user} from component 3</h1>
      <Component4 />
    </div>
  );
}

function Component4() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Hello {user} from component 4</h1>
      <Component5 />
    </div>
  );
}

function Component5() {
  const { user, count, lastName } = useContext(UserContext);
  const [num, setNum] = useState(count);

  const addNum = () => {   
    setNum(n => n + 1);
  } ;
  
  return (
    <div>
    <h1>
      Hello {user} from component 5  <br /> the count is {num} <br /> The last Name - {lastName}
    </h1>
    <button onClick={addNum}>Increment Count</button>
  </div>
  );
}

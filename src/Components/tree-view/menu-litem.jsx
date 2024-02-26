import ListItem from "./menu-list";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  // console.log(item);
  const [currentChildern, setCurrentChildern] = useState({});

  function handleToggleChildren(currentLabel) {
    setCurrentChildern({
      ...currentChildern,
      [currentLabel]: !currentChildern[currentLabel],
    });
  }

  console.log(currentChildern);

  return (
    <li >
      <div className="menu-item">
        <p>{item.label}</p>
        {item.children && item.children.length > 0 && item ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {currentChildern[item.label] ? (
              <FaMinus color="white" size={30} />
            ) : (
              <FaPlus color="green" size={30} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      currentChildern[item.label] ? (
        <ListItem listItems={item.children} />
      ) : null}
    </li>
  );
}

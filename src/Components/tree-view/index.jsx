import React from "react";
import menus from "./data.js";
import ListItem from "./menu-list.jsx";
import './styles.css'


export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <ListItem listItems={menus} />
    </div>
  );
}
import MenuItem from "./menu-litem";

export default function ListItem({ listItems = [] }) {
  console.log(listItems.length, listItems);
  return (
    <ul className="menu-list-container">
      {listItems && listItems.length
        ? listItems.map((item, index) => <MenuItem item={item} />)
        : null}
    </ul>
  );
}

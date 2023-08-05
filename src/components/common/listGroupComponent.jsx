import React from "react";

const ListGroup = ({
  items,
  onClick,
  selectedItem,
  textProperty,
  valueProperty,
}) => {
  return (
    <ul className="list-group">
      {items.map((g) => (
        <li
          style={{ cursor: "pointer" }}
          key={g[valueProperty]}
          className={
            selectedItem === g ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onClick(g)}
        >
          {g[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;

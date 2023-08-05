import React from "react";

const ListGroup = (props) => {
  const { items, onClick, selectedItem, textProperty, valueProperty } = props;

  return (
    <ul className="list-group">
      {items.map((g) => (
        <li
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

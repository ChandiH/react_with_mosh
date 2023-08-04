import React from "react";

const Counter = (props) => {
  const { counter, onIncrement, onDelete } = props;
  return (
    <div>
      <span>{counter.value}</span>
      <button
        className={"btn btn-secondary btn-sm m-2"}
        onClick={() => onIncrement(props.counter)}
      >
        increment
      </button>
      <button
        className={"btn btn-danger btn-sm m-2"}
        onClick={() => onDelete(props.counter.id)}
      >
        delete
      </button>
    </div>
  );
};

export default Counter;

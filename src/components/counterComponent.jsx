import React from "react";

const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  return (
    <div className="row">
      <div className="col-1">
        <span>{counter.value}</span>
      </div>
      <div className="col">
        <button
          className={"btn btn-secondary btn-sm"}
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button
          className={"btn btn-sm m-2 btn-secondary"}
          onClick={() => {
            if (counter.value > 0) onDecrement(counter);
          }}
          disabled={counter.value === 0}
        >
          -
        </button>
        <button
          className={"btn btn-danger btn-sm"}
          onClick={() => onDelete(counter.id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Counter;

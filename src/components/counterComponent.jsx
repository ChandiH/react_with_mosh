import React from "react";

const Counter = (props) => {
  const { counter, onIncrement, onDecrement, onDelete } = props;

  return (
    <div className="row">
      <div className="col-1">
        <span>{counter.value}</span>
      </div>
      <div className="col">
        <button
          className={"btn btn-secondary btn-sm"}
          onClick={() => onIncrement(props.counter)}
        >
          +
        </button>
        <button
          className={"btn btn-sm m-2 btn-secondary"}
          onClick={() => {
            if (props.counter.value > 0) onDecrement(props.counter);
          }}
          disabled={props.counter.value === 0}
        >
          -
        </button>
        <button
          className={"btn btn-danger btn-sm"}
          onClick={() => onDelete(props.counter.id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Counter;

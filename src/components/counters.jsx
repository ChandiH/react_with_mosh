import React from "react";
import Counter from "./counterComponent";

const Counters = ({
  counters,
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <div>
      <button className={"btn btn-primary btn-sm"} onClick={onReset}>
        reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          id={counter.id}
        />
      ))}
    </div>
  );
};

export default Counters;

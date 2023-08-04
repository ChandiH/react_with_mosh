import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    console.log(counterId);
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== counterId),
    });
  };

  handleReset = () => {
    this.setState(this.state.counters.map((c) => (c.value = 0)));
  };

  render() {
    return (
      <div>
        <button className={"btn btn-primary btn-sm"} onClick={this.handleReset}>
          reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

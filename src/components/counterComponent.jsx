import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    array: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    console.log("button pressed");
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello new Componenet</h1>
        <button onClick={this.handleIncrement}>increment</button>
        <p>{this.state.count}</p>

        <ul>
          {this.state.array.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Counter;

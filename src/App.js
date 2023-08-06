import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MovieList from "./components/movieListComponent";

class App extends Component {
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

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
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

  pressed = () => console.log("pressed");

  router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route path="movies" element={<MovieList />} />
        <Route
          path="counters"
          element={
            <Counters
              counters={this.state.counters}
              onDelete={this.handleDelete}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          }
        />
      </Route>
    )
  );

  // router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <NavBar />,
  //     children: [
  //       {
  //         path: "movies",
  //         element: <MovieList />,
  //       },
  //       {
  //         path: "counters",
  //         element: (
  //           <Counters
  //             counters={this.state.counters}
  //             onDelete={this.handleDelete}
  //             onReset={this.handleReset}
  //             onIncrement={this.handleIncrement}
  //             onDecrement={this.handleDecrement}
  //           />
  //         ),
  //       },
  //     ],
  //   },
  // ]);

  render() {
    return (
      <React.Fragment>
        <RouterProvider router={this.router} />
      </React.Fragment>
    );
  }
}

export default App;

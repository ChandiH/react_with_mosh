import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class MovieList extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter((m) => m._id !== movie._id),
    });
    console.log("deleted", movie);
  };

  render() {
    if (this.state.movies.length === 0)
      return <p>There are no Movies in the database</p>;
    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table>
          <thead>
            <tr>
              <th>title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rental Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <th>{movie.genre.name}</th>
                <th>{movie.numberInStock}</th>
                <th>{movie.dailyRentalRate}</th>
                <th>
                  <button onClick={() => this.handleDelete(movie)}>
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MovieList;

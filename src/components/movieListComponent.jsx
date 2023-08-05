import React, { Component } from "react";
import LikeComponent from "./common/likeComponent";
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

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = this.state.movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
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
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <LikeComponent
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    className={"btn btn-danger btn-sm"}
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MovieList;

import React, { Component } from "react";
import LikeComponent from "./common/likeComponent";
import Pagintaion from "./common/pagination";
import paginate from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";

class MovieList extends Component {
  state = {
    movies: getMovies(),
    pageSize: 2,
    currentPage: 1,
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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { movies: allMovies, pageSize, currentPage } = this.state;

    if (allMovies.length === 0)
      return <p>There are no Movies in the database</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <p>Showing {movies.length} movies in the database</p>
        <table className={"table"}>
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
            {movies.map((movie) => (
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
        <Pagintaion
          totalItems={allMovies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default MovieList;

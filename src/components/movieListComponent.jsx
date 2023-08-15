import React, { Component } from "react";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroupComponent";
import MovieTable from "./movieTable";
import _ from "lodash";
import { Link } from "react-router-dom";

class MovieList extends Component {
  state = {
    movies: [],
    genre: [],
    selectedGenre: null,
    pageSize: 5,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  //lifecycle Hook
  componentDidMount() {
    this.setState({ movies: getMovies(), genre: getGenres() });
  }

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

  handleGenreChange = (genre) => {
    if (
      this.state.selectedGenre !== null &&
      this.state.selectedGenre._id === genre._id
    )
      this.setState({ selectedGenre: null });
    else this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  filterMoviesbyGenre = () => {
    return this.state.selectedGenre === null
      ? this.state.movies
      : this.state.movies.filter(
          (m) => m.genre._id === this.state.selectedGenre._id
        );
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const { pageSize, currentPage, sortColumn } = this.state;
    const filteredMovies = this.filterMoviesbyGenre();

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      sortColumn.order
    );
    const movies = paginate(sortedMovies, currentPage, pageSize);

    return { itemCount: filteredMovies.length, data: movies };
  };

  render() {
    const { genre, selectedGenre, pageSize, currentPage, sortColumn } =
      this.state;

    if (this.state.movies.length === 0)
      return <p>There are no Movies in the database</p>;

    const { itemCount: movieCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genre}
            onClick={this.handleGenreChange}
            selectedItem={selectedGenre}
            textProperty="name"
            valueProperty="_id"
          />
        </div>
        <div className="col">
          <Link className="btn btn-primary" to="/movies/new">
            New Movie
          </Link>
          <p>Showing {movieCount} movies in the database</p>
          <MovieTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            totalItems={movieCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default MovieList;

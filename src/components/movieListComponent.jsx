import React, { Component } from "react";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroupComponent";
import MovieTable from "./movieTable";

class MovieList extends Component {
  state = {
    movies: [],
    genre: [],
    selectedGenre: null,
    pageSize: 5,
    currentPage: 1,
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

  render() {
    const {
      movies: allMovies,
      genre,
      selectedGenre,
      pageSize,
      currentPage,
    } = this.state;

    if (allMovies.length === 0)
      return <p>There are no Movies in the database</p>;

    const filteredMovies = this.filterMoviesbyGenre();

    const movies = paginate(filteredMovies, currentPage, pageSize);

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
          <p>Showing {filteredMovies.length} movies in the database</p>
          <MovieTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            totalItems={filteredMovies.length}
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

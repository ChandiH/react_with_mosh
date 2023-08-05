import React, { Component } from "react";
import LikeComponent from "./common/likeComponent";
import Table from "./common/table";

class MovieTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rental Rate" },
    {
      key: "Like",
      content: (movie) => (
        <LikeComponent
          liked={movie.liked}
          onClick={() => this.props.onLike(movie)}
        />
      ),
    },
    {
      key: "Delete",
      content: (movie) => (
        <button
          className={"btn btn-danger btn-sm"}
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}

export default MovieTable;

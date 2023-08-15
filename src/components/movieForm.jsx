import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";

function MovieForm() {
  const formClass = new Form();

  const [state, setState] = useState({
    data: { title: "", genre: "", numberInStock: "", dailyRentalRate: "" },
    errors: {},
  });

  formClass.state = state;
  formClass.changeState = setState;

  formClass.schema = {
    title: joi.string().required().label("Title"),
    genre: joi.string().required().label("Genre"),
    numberInStock: joi.number().required().label("Number in Stock"),
    dailyRentalRate: joi.number().required().label("Rate"),
  };

  const queryParameters = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (queryParameters.id === "new") {
      console.log("new Form created");
    } else {
      console.log(queryParameters);
      const movie = getMovie(queryParameters.id);
      const errors = state.errors;
      const data = {
        title: movie.title,
        genre: movie.genre.name,
        numberInStock: movie.numberInStock,
        dailyRentalRate: movie.dailyRentalRate,
      };
      setState({ data, errors });
    }
  }, [queryParameters]);

  formClass.doSubmit = () => {
    console.log("Submitted", state.data);
    const movie = getMovie(queryParameters.id);
    console.log("db movie", movie);
    movie.title = state.data.title;
    movie.dailyRentalRate = state.data.dailyRentalRate;
    movie.numberInStock = state.data.numberInStock;
    console.log("edited movie", movie);
    saveMovie(movie);
    navigate("/movies");
  };
  // doSubmit = () => {
  //   // call server
  //   //   const navigate = this.getNavigation();
  //   //   navigate("/movies");
  // };

  return (
    <div className="container">
      <h1>Movie Form</h1>
      <form onSubmit={formClass.handleSubmit}>
        {formClass.renderInputField("title", "Title")}
        {formClass.renderInputField("genre", "Genre")}
        {formClass.renderInputField("numberInStock", "Number in Stock")}
        {formClass.renderInputField("dailyRentalRate", "Rate")}
        {formClass.renderButton("Save")}
      </form>
    </div>
  );
}
export default MovieForm;

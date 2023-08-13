import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = () => {
  const queryParameters = useParams();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>MovieForm {queryParameters["id"]}</h1>
      <button
        className={"btn btn-primary"}
        onClick={() => {
          console.log("btn pressed");
          navigate("/movies");
        }}
      >
        save
      </button>
    </div>
  );
};

export default MovieForm;

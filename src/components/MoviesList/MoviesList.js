import React from "react";

import MoviesItem from "./MoviesItem/MoviesItem";
import s from "./MoviesItem/MoviesItem.module.css";

const MoviesList = ({ movies, ...props }) => (
  <ul className={s.MoviesList}>
    {movies.map(({ id, ...moviesProps }) => (
      <MoviesItem key={id} id={id} {...moviesProps} {...props} />
    ))}
  </ul>
);

export default MoviesList;

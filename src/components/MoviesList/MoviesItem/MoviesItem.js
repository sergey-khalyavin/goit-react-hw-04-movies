import React from "react";
import { Link } from "react-router-dom";

import routes from "../../../routes";

import s from "./MoviesItem.module.css";

const MoviesItem = ({ id, poster_path, title, location }) => {
  return (
    <li className={s.MoviesItem}>
      <Link
        className={s.ItemLink}
        to={{
          pathname: `${routes.movies}/${id}`,
          state: { from: location },
        }}
      >
        <img className={s.ItemMovieImg} src={poster_path} alt={title} />
        <h3 className={s.ItemMovieTitle}>{title}</h3>
      </Link>
    </li>
  );
};

export default MoviesItem;

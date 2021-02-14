import React from "react";

import s from "./DescMovie.module.css";

const DescMovie = ({ movie, handleGoBack }) => {
  const {
    title,
    poster_path,
    genres,
    vote_average,
    overview,
    release_date,
  } = movie;

  return (
    <div className={s.descMovie}>
      <div>
        <button type="button" className={s.btnBack} onClick={handleGoBack}>
          Back to list
        </button>
        <img className={s.img} src={poster_path} alt={title} />
      </div>
      <div className={s.wrapperDetails}>
        <h2 className={(s.detailsTitle, s.mainTitle)}>
          {title} ({release_date})
        </h2>
        <p>User Score: {vote_average * 10}%</p>

        <h2 className={s.detailsTitle}>Overview</h2>
        <p>{overview}</p>
        <h2 className={s.detailsTitle}>Genres</h2>

        {genres && (
          <ul className={s.genresMovie}>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DescMovie;

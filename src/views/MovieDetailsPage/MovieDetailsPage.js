import React, { Component, Suspense, lazy } from "react";
import { Route, NavLink } from "react-router-dom";

import moviesApi from "../../services/moviesApi";
import Loader from "react-loader-spinner";
import routes from "../../routes";
import DescMovie from "../../components/DescMovie/DescMovie";
import { formationUrlInOneMovie } from "../../helpers/formationURL";

import s from "./MovieDetailsPage.module.css";

const AsyncCast = lazy(() =>
  import("./Cast/Cast.js" /* webpackChunkName: "async-cast-component" */)
);

const AsyncReviews = lazy(() =>
  import(
    "./Reviews/Reviews.js" /* webpackChunkName: "async-reviews-component" */
  )
);

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    isLoader: false,
    error: null,
    location: this.props.location.state.from,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchMovieDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie: formationUrlInOneMovie(movie) }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  handleGoToList = () => {
    return this.props.history.push(this.state.location);
  };

  render() {
    const { isLoader, movie, error } = this.state;
    const { match } = this.props;
    return (
      <>
        {isLoader && (
          <div>
            <Loader type="Oval" color="#00BFFF" height={70} width={100} />
          </div>
        )}

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {movie && (
          <>
            <DescMovie movie={movie} handleGoBack={this.handleGoToList} />
            <hr />
            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              to={{
                pathname: `${match.url}${routes.Reviews}`,
                state: { from: this.props.location },
              }}
            >
              Reviews
            </NavLink>

            <NavLink
              className={s.link}
              activeClassName={s.activeLink}
              to={{
                pathname: `${match.url}${routes.Cast}`,
                state: { from: this.props.location },
              }}
            >
              Cast
            </NavLink>

            <Suspense
              fallback={
                <div>
                  <Loader type="Oval" color="#00BFFF" height={70} width={100} />
                </div>
              }
            >
              <Route
                path={`${match.path}${routes.Reviews}`}
                component={AsyncReviews}
              />
              <Route
                path={`${match.path}${routes.Cast}`}
                component={AsyncCast}
              />
            </Suspense>
          </>
        )}
      </>
    );
  }
}

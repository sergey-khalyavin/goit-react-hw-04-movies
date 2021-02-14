import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Loader from "react-loader-spinner";
import Layout from "./Layout/Layout";
import routes from "../routes";

const AsyncHomePage = lazy(() =>
  import("../views/HomePage/HomePage.js" /* webpackChunkName: "home-page" */)
);

const AsyncMoviesPage = lazy(() =>
  import(
    "../views/MoviesPage/MoviesPage.js" /* webpackChunkName: "movies-page" */
  )
);

const AsyncMovieDetailsPage = lazy(() =>
  import(
    "../views/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */
  )
);

const App = () => (
  <>
    <Layout>
      <Suspense
        fallback={
          <div>
            <Loader type="Oval" color="#00BFFF" height={70} width={100} />
          </div>
        }
      >
        <Switch>
          <Route path={routes.home} exact component={AsyncHomePage} />
          <Route path={routes.movies} exact component={AsyncMoviesPage} />
          <Route path={routes.movieDetails} component={AsyncMovieDetailsPage} />

          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Layout>
  </>
);

export default App;

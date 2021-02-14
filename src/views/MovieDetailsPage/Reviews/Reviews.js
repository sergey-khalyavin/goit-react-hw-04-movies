import React, { Component } from "react";

import Loader from "react-loader-spinner";
import moviesApi from "../../../services/moviesApi";

import s from "./Reviews.module.css";

export default class Reviews extends Component {
  state = {
    reviews: [],
    reviewId: "",
    isLoader: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoader: true });
    moviesApi
      .fetchReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoader: false }));
  }

  handleShowReviews = (id) => {
    const { reviewId } = this.state;
    return this.setState({ reviewId: reviewId === id ? "" : id });
  };

  render() {
    const { isLoader, reviews, error, reviewId } = this.state;
    return (
      <>
        {isLoader && (
          <div>
            <Loader type="Oval" color="#00BFFF" height={50} width={60} />
          </div>
        )}

        <div className={s.wrapper}>
          {reviews.length > 0 && (
            <ul>
              {reviews.map((review) => {
                return (
                  <li key={review.id} className={s.reviewsItem}>
                    <h3>Author: {review.author}</h3>
                    {reviewId === review.id && <p>{review.content}</p>}
                    {reviewId !== review.id && (
                      <p>{review.content.slice(0, 300)}</p>
                    )}

                    <button
                      className={s.reviewsBtn}
                      type="button"
                      onClick={() => this.handleShowReviews(review.id)}
                    >
                      {reviewId === review.id ? " Hide review" : "Show review"}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {reviews.length === 0 && (
            <p>We don't have any reviews for this movie.</p>
          )}
        </div>

        {error && <p>Whoops, something went wrong: {error.message}</p>}
      </>
    );
  }
}

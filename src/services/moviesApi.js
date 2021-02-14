const apiKey = "06ac1e5480b3a6972f7c1e402a59d7e1";
const baseURL = "https://api.themoviedb.org/3/";
const page = 1;

const fetchMovieDetails = (id) => {
  return fetch(`${baseURL}movie/${id}?api_key=${apiKey}`).then((res) =>
    res.json()
  );
};

const fetchMovieWithQuery = (searchQuery) => {
  return fetch(`${baseURL}search/movie?api_key=${apiKey}&query=${searchQuery}`)
    .then((res) => res.json())
    .then(({ results }) => results);
};

const fetchHomePageMovies = () => {
  return fetch(`${baseURL}trending/movie/day?api_key=${apiKey}&page=${page}`)
    .then((res) => res.json())
    .then(({ results }) => results);
};

const fetchReviews = (id) => {
  return fetch(`${baseURL}movie/${id}/reviews?api_key=${apiKey}`)
    .then((res) => res.json())
    .then(({ results }) => results);
};

const fetchCast = (id) => {
  return fetch(`${baseURL}movie/${id}/credits?api_key=${apiKey}`)
    .then((res) => res.json())
    .then(({ cast }) => cast);
};

export default {
  fetchMovieDetails,
  fetchMovieWithQuery,
  fetchHomePageMovies,
  fetchReviews,
  fetchCast,
};

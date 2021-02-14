const baseUrlImg = "https://image.tmdb.org/t/p/w500";

const formationUrlInArrMovies = (results) => {
  results.map((item) => {
    if (item.poster_path) {
      item.poster_path = `${baseUrlImg}${item.poster_path}`;
    } else {
      item.poster_path =
        "https://anotherjavaduke.files.wordpress.com/2018/08/avataaars-2.png";
    }

    return item;
  });

  return results;
};

const formationUrlInArrCast = (arr) => {
  if (arr) {
    arr.map((el) => {
      if (!el.profile_path) {
        el.profile_path =
          "https://anotherjavaduke.files.wordpress.com/2018/08/avataaars-2.png";
      } else {
        el.profile_path = `${baseUrlImg}${el.profile_path}`;
      }

      return el;
    });
  }
  return arr;
};

const formationUrlInOneMovie = (results) => {
  if (results.poster_path) {
    results.poster_path = `${baseUrlImg}${results.poster_path}`;
  } else {
    results.poster_path =
      "https://anotherjavaduke.files.wordpress.com/2018/08/avataaars-2.png";
  }

  return results;
};

export {
  formationUrlInArrMovies,
  formationUrlInOneMovie,
  formationUrlInArrCast,
};

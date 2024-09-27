import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmFlZjU3NDRlMTE1ZjI2MmViOWUyNmFjY2EyNzk0YyIsIm5iZiI6MTcyNzM1Mjc1MS45ODcyNzYsInN1YiI6IjY2ZjU0ZTZiNWUzNTRjNTAxMjczZjg4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ncLkX8BrtlcYWymNj1ExcRj5SPJ65_0zKG04ikP6TQc",
  },
};

export async function fetchFilms() {
  const { data } = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );

  return data;
}

export async function fetchFilmsByID(movieId) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );

  return data;
}

export async function fetchFilmsByIDForReviews(movieId) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );

  return data;
}

export async function fetchFilmsByIDForCredits(movieId) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );

  return data;
}

export async function fetchFilmsByIDForMovies(movieName) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
    options
  );

  return data;
}

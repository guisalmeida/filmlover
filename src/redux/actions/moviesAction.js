export function setAllMovies(movies) {
  return {
    type: "SET_ALL_MOVIES",
    payload: movies
  }
}

export function setSearchMovies(movies) {
  return {
    type: "SET_SEARCH_MOVIES",
    payload: movies
  }
}

export function likeMovie(movie) {
  return {
    type: "LIKE_MOVIE",
    payload: movie
  }
}

export function dislikeMovie(movie) {
  return {
    type: "DISLIKE_MOVIE",
    payload: movie
  }
}
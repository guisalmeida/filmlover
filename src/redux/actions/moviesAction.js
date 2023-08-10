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

export function setLikedMovies(movies) {
  return {
    type: "SET_LIKED_MOVIES",
    payload: movies
  }
}

export function setDislikedMovies(movies) {
  return {
    type: "SET_DISLIKED_MOVIES",
    payload: movies
  }
}

export function addLikedMovie(movie) {
  return {
    type: "ADD_LIKED_MOVIE",
    payload: movie
  }
}

export function addDislikedMovie(movie) {
  return {
    type: "ADD_DISLIKED_MOVIE",
    payload: movie
  }
}

export function setActualPage(page) {
  return {
    type: "SET_ACTUAL_PAGE",
    payload: page
  }
}
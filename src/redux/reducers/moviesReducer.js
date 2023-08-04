import { MOVIES_ACTION_TYPES } from '../types/moviesTypes'

const INITIAL_STATE = {
  all: [],
  liked: [],
  disliked: [],
  searchResult: []
}

export const moviesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case MOVIES_ACTION_TYPES.SET_ALL_MOVIES:
      return { ...state, all: payload }

    case MOVIES_ACTION_TYPES.SET_SEARCH_MOVIES:
      return { ...state, searchResult: payload }

    case MOVIES_ACTION_TYPES.ADD_LIKED_MOVIE:
      return { ...state, liked: [...state.liked, payload] }

    case MOVIES_ACTION_TYPES.SET_LIKED_MOVIES:
      return { ...state, liked: payload }

    case MOVIES_ACTION_TYPES.ADD_DISLIKED_MOVIE:
      return { ...state, disliked: [...state.disliked, payload] }

    case MOVIES_ACTION_TYPES.SET_DISLIKED_MOVIES:
      return { ...state, disliked: payload }

    default:
      return state
  }
}


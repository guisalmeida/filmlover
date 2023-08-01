import { MOVIES_ACTION_TYPES } from '../types/moviesTypes'

const INITIAL_STATE = {
  all: [],
  liked: [],
  disliked: []
}

export const moviesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case MOVIES_ACTION_TYPES.SET_MOVIES:
      return { ...state, all: payload }
    default:
      return state
  }
}


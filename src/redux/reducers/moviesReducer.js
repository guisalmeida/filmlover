import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  all: [],
  liked: [],
  disliked: [],
  searchResult: [],
  actualPage: 1,
  isLoading: true,
}

/**
 * CreateSlice function:
 * It looks like a mutation, but it's not.
 * And this is due to the fact that under the Hood
 * Redux Toolkit is using a library called Immer
 * to ensure that there is immutability.
 * 
 * It's just that you want to leverage the legibility of mutation style code.
 */
export const moviesSlice = createSlice({
  name: 'movie',
  initialState: INITIAL_STATE,
  reducers: {
    setAllMovies(state, action) {
      state.all = action.payload
    },
    setSearchMovies(state, action) {
      state.searchResult = action.payload
    },
    setLikedMovies(state, action) {
      state.liked = action.payload
    },
    setDislikedMovies(state, action) {
      state.disliked = action.payload
    },
    setActualPage(state, action) {
      state.actualPage = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    addLikedMovie(state, action) {
      state.liked = [...state.liked, action.payload]
    },
    addDislikedMovie(state, action) {
      state.disliked = [...state.disliked, action.payload]
    }
  }
})

export const {
  setAllMovies,
  setSearchMovies,
  setLikedMovies,
  setDislikedMovies,
  setActualPage,
  setIsLoading,
  addLikedMovie,
  addDislikedMovie,
} = moviesSlice.actions

export const moviesReducer = moviesSlice.reducer
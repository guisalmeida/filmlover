import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TMovie = {
  id: number;
  name: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  genre_ids: [];
};

export type TMoviesInitialState = {
  readonly all: TMovie[];
  readonly liked: TMovie[];
  readonly disliked: TMovie[];
  readonly searchResult: TMovie[];
  readonly actualPage: number;
  readonly isLoading: boolean;
};

const INITIAL_STATE: TMoviesInitialState = {
  all: [],
  liked: [],
  disliked: [],
  searchResult: [],
  actualPage: 1,
  isLoading: true,
};

/* eslint-disable no-param-reassign */
/**
 * CreateSlice function:
 * It looks like a mutation, but it's not.
 * And this is due to the fact that under the Hood
 * Redux Toolkit is using a library called Immer
 * to ensure that there is immutability.
 *
 * It's just that you want to leverage the legibility of mutation style code.
 *
 * @see https://redux-toolkit.js.org/usage/immer-reducers#immer-usage-patterns
 */
export const moviesSlice = createSlice({
  name: 'movie',
  initialState: INITIAL_STATE,
  reducers: {
    setAllMovies(state, action: PayloadAction<TMovie[]>) {
      state.all = action.payload;
    },
    setSearchMovies(state, action: PayloadAction<TMovie[]>) {
      state.searchResult = action.payload;
    },
    setLikedMovies(state, action: PayloadAction<TMovie[]>) {
      state.liked = action.payload;
    },
    setDislikedMovies(state, action: PayloadAction<TMovie[]>) {
      state.disliked = action.payload;
    },
    setActualPage(state, action: PayloadAction<number>) {
      state.actualPage = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    addLikedMovie(state, action: PayloadAction<TMovie>) {
      state.liked.push(action.payload);
    },
    addDislikedMovie(state, action: PayloadAction<TMovie>) {
      state.disliked.push(action.payload);
    },
  },
});

export const {
  setAllMovies,
  setSearchMovies,
  setLikedMovies,
  setDislikedMovies,
  setActualPage,
  setIsLoading,
  addLikedMovie,
  addDislikedMovie,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;

import { TMovie } from '../reducers/moviesReducer';
import { TRootState } from '../store';

export const selectAllMovies = (state: TRootState): TMovie[] =>
  state.movies.all;

export const selectLikedMovies = (state: TRootState): TMovie[] =>
  state.movies.liked;

export const selectDislikedMovies = (state: TRootState): TMovie[] =>
  state.movies.disliked;

export const selectSearchResultMovies = (state: TRootState): TMovie[] =>
  state.movies.searchResult;

export const selectIsLoading = (state: TRootState): boolean =>
  state.movies.isLoading;

export const selectActualPage = (state: TRootState): number =>
  state.movies.actualPage;

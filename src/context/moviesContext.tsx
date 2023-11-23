import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react';

export type MovieType = {
  id: number;
  name: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
};

export type InitStateType = {
  readonly allMovies: MovieType[];
  readonly likedMoviesList: MovieType[];
  readonly dislikedMoviesList: MovieType[];
  readonly searchResult: MovieType[];
  readonly actualPage: number;
  readonly isLoading: boolean;
};

const initState: InitStateType = {
  allMovies: [],
  likedMoviesList: [],
  dislikedMoviesList: [],
  searchResult: [],
  actualPage: 1,
  isLoading: true,
};

const enum MovieActionType {
  SET_ALL_MOVIES,
  SET_LIKED_MOVIES,
  SET_DISLIKED_MOVIES,
  SET_SEARCH_MOVIES,
  SET_ACTUAL_PAGE,
  SET_IS_LOADING,
  ADD_LIKED_MOVIE,
  ADD_DISLIKED_MOVIE,
}

type MoviesReducerActionType = {
  type: MovieActionType;
  payload?: MovieType | MovieType[] | number | boolean;
};

const moviesReducer = (
  state: InitStateType,
  action: MoviesReducerActionType
): InitStateType => {
  const { type, payload } = action;

  switch (type) {
    case MovieActionType.SET_ALL_MOVIES:
      return { ...state, allMovies: payload as MovieType[] };

    case MovieActionType.SET_LIKED_MOVIES:
      return { ...state, likedMoviesList: payload as MovieType[] };

    case MovieActionType.SET_DISLIKED_MOVIES:
      return { ...state, dislikedMoviesList: payload as MovieType[] };

    case MovieActionType.SET_SEARCH_MOVIES:
      return { ...state, searchResult: payload as MovieType[] };

    case MovieActionType.SET_ACTUAL_PAGE:
      return { ...state, actualPage: payload as number };

    case MovieActionType.SET_IS_LOADING:
      return { ...state, isLoading: payload as boolean };

    case MovieActionType.ADD_LIKED_MOVIE:
      return {
        ...state,
        likedMoviesList: [...state.likedMoviesList, payload as MovieType],
      };

    case MovieActionType.ADD_DISLIKED_MOVIE:
      return {
        ...state,
        dislikedMoviesList: [...state.dislikedMoviesList, payload as MovieType],
      };

    default:
      throw new Error('Action type invalid!');
  }
};

const useMoviesContext = (initialState: InitStateType) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const setAllMovies = useCallback(
    (payload: MovieType[]) =>
      dispatch({
        type: MovieActionType.SET_ALL_MOVIES,
        payload,
      }),
    []
  );

  const setLikedMoviesList = useCallback(
    (payload: MovieType[]) =>
      dispatch({
        type: MovieActionType.SET_LIKED_MOVIES,
        payload,
      }),
    []
  );

  const setDislikedMoviesList = useCallback(
    (payload: MovieType[]) =>
      dispatch({
        type: MovieActionType.SET_DISLIKED_MOVIES,
        payload,
      }),
    []
  );

  const setSearchResult = useCallback(
    (payload: MovieType[]) =>
      dispatch({
        type: MovieActionType.SET_SEARCH_MOVIES,
        payload,
      }),
    []
  );

  const setActualPage = useCallback(
    (payload: number) =>
      dispatch({
        type: MovieActionType.SET_ACTUAL_PAGE,
        payload,
      }),
    []
  );

  const setIsLoading = useCallback(
    (payload: boolean) =>
      dispatch({
        type: MovieActionType.SET_IS_LOADING,
        payload,
      }),
    []
  );

  const addLikedMovie = useCallback(
    (payload: MovieType) =>
      dispatch({
        type: MovieActionType.ADD_LIKED_MOVIE,
        payload,
      }),
    []
  );

  const addDislikedMovie = useCallback(
    (payload: MovieType) =>
      dispatch({
        type: MovieActionType.ADD_DISLIKED_MOVIE,
        payload,
      }),
    []
  );

  return {
    state,
    setAllMovies,
    setLikedMoviesList,
    setDislikedMoviesList,
    setSearchResult,
    setActualPage,
    setIsLoading,
    addLikedMovie,
    addDislikedMovie,
  };
};

type UseMovieContextType = ReturnType<typeof useMoviesContext>;

const initContextState: UseMovieContextType = {
  state: initState,
  setAllMovies: () => {},
  setLikedMoviesList: () => {},
  setDislikedMoviesList: () => {},
  setSearchResult: () => {},
  setActualPage: () => {},
  setIsLoading: () => {},
  addLikedMovie: () => {},
  addDislikedMovie: () => {},
};

export const MoviesContext =
  createContext<UseMovieContextType>(initContextState);

type MovieProviderPropType = {
  children: React.ReactNode;
};

const getInitContextState = (): InitStateType => {
  const state = window.sessionStorage.getItem('state');
  return state ? JSON.parse(state) : initState;
};

export default function MoviesProvider({ children }: MovieProviderPropType) {
  const value = useMoviesContext(getInitContextState());

  useEffect(() => {
    window.sessionStorage.setItem('state', JSON.stringify(value.state));
  }, [value.state]);

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

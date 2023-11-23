import React, {
  SetStateAction,
  createContext,
  useState,
  Dispatch,
} from 'react';

export type TMovie = {
  id: number;
  name: string;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  genre_ids: number[];
};

export type TMoviesInitialState = {
  allMovies: TMovie[];
  likedMoviesList: TMovie[];
  dislikedMoviesList: TMovie[];
  searchResult: TMovie[];
  actualPage: number;
  isLoading: boolean;
  setAllMovies: Dispatch<SetStateAction<TMovie[]>>;
  setLikedMoviesList: Dispatch<SetStateAction<TMovie[]>>;
  setDislikedMoviesList: Dispatch<SetStateAction<TMovie[]>>;
  setSearchResult: Dispatch<SetStateAction<TMovie[]>>;
  setActualPage: Dispatch<SetStateAction<number>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  addLikedMovie: (movie: TMovie) => void;
  addDislikedMovie: (movie: TMovie) => void;
};

export const MoviesContext = createContext<TMoviesInitialState>({
  allMovies: [],
  likedMoviesList: [],
  dislikedMoviesList: [],
  searchResult: [],
  actualPage: 1,
  isLoading: true,
  setAllMovies: () => {},
  setLikedMoviesList: () => {},
  setDislikedMoviesList: () => {},
  setSearchResult: () => {},
  setActualPage: () => {},
  setIsLoading: () => {},
  addLikedMovie: () => {},
  addDislikedMovie: () => {},
} as TMoviesInitialState);

type TMoviesProviderProps = {
  children: React.ReactNode;
};

export default function MoviesProvider({ children }: TMoviesProviderProps) {
  const [allMovies, setAllMovies] = useState<TMovie[]>([]);
  const [likedMoviesList, setLikedMoviesList] = useState<TMovie[]>([]);
  const [dislikedMoviesList, setDislikedMoviesList] = useState<TMovie[]>([]);
  const [searchResult, setSearchResult] = useState<TMovie[]>([]);
  const [actualPage, setActualPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addLikedMovie = (movie: TMovie) => {
    setLikedMoviesList((prevList) => [...prevList, movie]);
  };

  const addDislikedMovie = (movie: TMovie) => {
    setDislikedMoviesList((prevList) => [...prevList, movie]);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    allMovies,
    setAllMovies,
    likedMoviesList,
    setLikedMoviesList,
    dislikedMoviesList,
    setDislikedMoviesList,
    searchResult,
    setSearchResult,
    actualPage,
    setActualPage,
    isLoading,
    setIsLoading,
    addLikedMovie,
    addDislikedMovie,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

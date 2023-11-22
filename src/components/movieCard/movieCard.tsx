import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  addLikedMovie,
  addDislikedMovie,
  setAllMovies,
  setLikedMovies,
  setDislikedMovies,
  TMovie,
} from '../../redux/reducers/moviesReducer';
import {
  selectAllMovies,
  selectDislikedMovies,
  selectLikedMovies,
} from '../../redux/selectors/moviesSelector';

import { MOVIE_GENRES, IMAGE_URL } from '../../utils/api';
import GenreBox from '../genreBox/genreBox';

import * as Styled from './movieCard.styled';

type TMovieCardProps = {
  movie: TMovie;
};

export default function MovieCard({
  movie,
}: TMovieCardProps): React.JSX.Element {
  const dispatch = useDispatch();

  const allMovies = useSelector(selectAllMovies);
  const likedMoviesList = useSelector(selectLikedMovies);
  const dislikedMoviesList = useSelector(selectDislikedMovies);

  const location = useLocation();
  const showButtons = location.pathname === '/search';
  const showCloseButton =
    location.pathname === '/favorites' || location.pathname === '/wallofshame';

  const whichLocation = () => {
    if (location.pathname === '/favorites') {
      return 'favorites';
    }
    if (location.pathname === '/wallofshame') {
      return 'wall of shame';
    }
    return '';
  };

  const removeMovieFromList = (movieToRemove: TMovie, movieList: TMovie[]) =>
    movieList.filter((listMovie) => listMovie.id !== movieToRemove.id);

  const isOnList = (movieOnList: TMovie, movieList: TMovie[]) =>
    Boolean(movieList.find((listMovie) => listMovie.id === movieOnList.id));

  const handleAddLikedMovie = (newLikedMovie: TMovie) => {
    const isLiked = isOnList(newLikedMovie, likedMoviesList);

    if (isLiked) {
      return console.log('It is already on the liked list!');
    }

    const filteredMovies = removeMovieFromList(newLikedMovie, allMovies);
    dispatch(setAllMovies(filteredMovies));
    dispatch(addLikedMovie(newLikedMovie));
    return console.log('Movie liked!');
  };

  const handleAddDislikedMovie = (NewDislikedMovie: TMovie) => {
    const isLiked = isOnList(NewDislikedMovie, dislikedMoviesList);

    if (isLiked) {
      return console.log('It is already on the disliked list!');
    }

    const filteredMovies = removeMovieFromList(NewDislikedMovie, allMovies);
    dispatch(setAllMovies(filteredMovies));
    dispatch(addDislikedMovie(NewDislikedMovie));
    return console.log('Movie disliked!');
  };

  const removeMovieFromDislikedList = (dislikedMovie: TMovie) => {
    const isDisliked = isOnList(dislikedMovie, dislikedMoviesList);

    if (!isDisliked) {
      return console.log('It is not on the disliked list!');
    }

    const updatedDislikedList = removeMovieFromList(
      dislikedMovie,
      dislikedMoviesList
    );
    dispatch(setDislikedMovies(updatedDislikedList));
    dispatch(setAllMovies([...allMovies, dislikedMovie]));
    return console.log('Removed!');
  };

  const removeMovieFromLikedList = (likedMovie: TMovie) => {
    const isDisliked = isOnList(likedMovie, likedMoviesList);

    if (!isDisliked) {
      return console.log('It is not on the liked list!');
    }

    const updatedLikedList = removeMovieFromList(likedMovie, likedMoviesList);
    dispatch(setLikedMovies(updatedLikedList));
    dispatch(setAllMovies([...allMovies, likedMovie]));
    return console.log('Removed!');
  };

  const imageUrl = movie.poster_path
    ? IMAGE_URL + movie.poster_path
    : '/not-found.png';

  return (
    <Styled.MovieCardContainer $imageUrl={imageUrl}>
      <img
        className="imagePoster"
        src={imageUrl}
        alt={movie.title}
        loading="lazy"
      />

      {showButtons ? (
        <Styled.MovieCardButtons>
          <button
            type="button"
            aria-label="Dislike Movie"
            title="Dislike Movie"
            onClick={() => handleAddDislikedMovie(movie)}
          >
            <Styled.DislikeButton />
          </button>

          <button
            type="button"
            aria-label="Like Movie"
            title="Like Movie"
            onClick={() => handleAddLikedMovie(movie)}
          >
            <Styled.LikeButton />
          </button>
        </Styled.MovieCardButtons>
      ) : null}

      {movie.overview ? (
        <Styled.MovieOverview>
          <p>{movie.overview}</p>
        </Styled.MovieOverview>
      ) : null}

      {showCloseButton && (
        <Styled.CloseButton
          type="button"
          title={`Remove from ${whichLocation()}`}
          onClick={() => {
            if (location.pathname === '/favorites') {
              removeMovieFromLikedList(movie);
            } else if (location.pathname === '/wallofshame')
              removeMovieFromDislikedList(movie);
          }}
        >
          <Styled.RemoveIcon />
        </Styled.CloseButton>
      )}

      <Styled.MovieCardActions>
        <div className="title-container">
          <h3>{movie.title}</h3>
          <p className="votes">
            <Styled.StarIcon />
            {movie.vote_average.toFixed(1)}
          </p>
        </div>

        <Styled.GenreContainer>
          {movie.genre_ids.map((cod, i) => {
            if (i > 2) return;
            const genre = MOVIE_GENRES.find((m) => m.id === cod);
            return genre ? (
              <GenreBox key={cod}>{genre.name}</GenreBox>
            ) : undefined;
          })}
        </Styled.GenreContainer>
      </Styled.MovieCardActions>
    </Styled.MovieCardContainer>
  );
}

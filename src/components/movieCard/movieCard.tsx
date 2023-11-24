import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

import { MovieType, MoviesContext } from '../../context/moviesContext';

import { MOVIE_GENRES, IMAGE_URL } from '../../utils/api';
import GenreBox from '../genreBox/genreBox';

import * as Styled from './movieCard.styled';

type MovieTypeCardProps = {
  movie: MovieType;
};

export default function MovieCard({
  movie,
}: MovieTypeCardProps): React.JSX.Element {
  const location = useLocation();
  const showButtons = location.pathname === '/search';
  const showCloseButton =
    location.pathname === '/favorites' || location.pathname === '/wallofshame';
  const {
    state: { allMovies, likedMoviesList, dislikedMoviesList },
    setAllMovies,
    setLikedMoviesList,
    setDislikedMoviesList,
    addLikedMovie,
    addDislikedMovie,
  } = useContext(MoviesContext);

  const whichLocation = () => {
    if (location.pathname === '/favorites') {
      return 'favorites';
    }
    if (location.pathname === '/wallofshame') {
      return 'wall of shame';
    }
    return '';
  };

  const removeMovieFromList = (
    movieToRemove: MovieType,
    movieList: MovieType[]
  ) => movieList.filter((listMovie) => listMovie.id !== movieToRemove.id);

  const isOnList = (movieOnList: MovieType, movieList: MovieType[]) =>
    Boolean(movieList.find((listMovie) => listMovie.id === movieOnList.id));

  const handleAddLikedMovie = (newLikedMovie: MovieType) => {
    const isLiked = isOnList(newLikedMovie, likedMoviesList);

    if (isLiked) {
      return;
    }

    const filteredMovies = removeMovieFromList(newLikedMovie, allMovies);
    setAllMovies(filteredMovies);
    addLikedMovie(newLikedMovie);
    return toast('Movie liked!', { icon: '❤️' });
  };

  const handleAddDislikedMovie = (NewDislikedMovie: MovieType) => {
    const isLiked = isOnList(NewDislikedMovie, dislikedMoviesList);

    if (isLiked) {
      return;
    }

    const filteredMovies = removeMovieFromList(NewDislikedMovie, allMovies);
    setAllMovies(filteredMovies);
    addDislikedMovie(NewDislikedMovie);
    return toast('Movie disliked!', { icon: '👎' });
  };

  const removeMovieFromDislikedList = (dislikedMovie: MovieType) => {
    const isDisliked = isOnList(dislikedMovie, dislikedMoviesList);

    if (!isDisliked) {
      return;
    }

    const updatedDislikedList = removeMovieFromList(
      dislikedMovie,
      dislikedMoviesList
    );
    setDislikedMoviesList(updatedDislikedList);
    setAllMovies([...allMovies, dislikedMovie]);
    return toast('Removed from Wall of shame!', { icon: '❌' });
  };

  const removeMovieFromLikedList = (likedMovie: MovieType) => {
    const isLiked = isOnList(likedMovie, likedMoviesList);

    if (!isLiked) {
      return;
    }

    const updatedLikedList = removeMovieFromList(likedMovie, likedMoviesList);
    setLikedMoviesList(updatedLikedList);
    setAllMovies([...allMovies, likedMovie]);
    return toast('Removed from favorites!', { icon: '❌' });
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

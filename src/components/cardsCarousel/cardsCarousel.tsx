import React, { useState, useMemo, useRef, useEffect, useContext } from 'react';
import TinderCard from 'react-tinder-card';

import { fetchMovies } from '../../utils/api';
import { TMovie, MoviesContext } from '../../context/moviesContext';

import MovieCard from '../movieCard/movieCard';
import Spinner from '../spinner/spinner';
import AlertBox from '../alertBox/alertBox';

import * as Styled from './cardsCarousel.styled';

export default function CardsCarousel() {
  const {
    likedMoviesList,
    dislikedMoviesList,
    allMovies,
    actualPage,
    isLoading,
    setAllMovies,
    setIsLoading,
    addLikedMovie,
    addDislikedMovie,
    setActualPage,
  } = useContext(MoviesContext);

  const [currentIndex, setCurrentIndex] = useState(allMovies.length - 1);
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState('');

  const currentIndexRef = useRef(currentIndex);
  const canSwipe = currentIndex >= 0;
  const childRefs = useMemo(
    () =>
      Array(allMovies.length)
        .fill(0)
        .map(() => React.createRef()),
    [allMovies]
  );

  const swipe = async (dir: string) => {
    if (canSwipe && currentIndex < allMovies.length) {
      // @ts-ignore
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const removeMovieFromList = (movieToRemove: TMovie, movieList: TMovie[]) =>
    movieList.filter((movie) => movie.id !== movieToRemove.id);

  const isOnList = (movie: TMovie, movieList: TMovie[]) =>
    Boolean(movieList.find((listMovie) => listMovie.id === movie.id));

  const handleAddLikedMovie = (newLikedMovie: TMovie) => {
    setShowAlert(true);
    setAlertText('Movie liked!');
    const isLiked = isOnList(newLikedMovie, likedMoviesList);

    if (isLiked) {
      return console.log('It is already on the liked list!');
    }

    swipe('right');
    setTimeout(() => {
      const filteredMovies = removeMovieFromList(newLikedMovie, allMovies);
      setAllMovies(filteredMovies);
      addLikedMovie(newLikedMovie);
      setShowAlert(false);
    }, 1000);

    return console.log('Movie liked!');
  };

  const handleAddDislikedMovie = (NewDislikedMovie: TMovie) => {
    setShowAlert(true);
    setAlertText('Movie disliked!');
    const isLiked = isOnList(NewDislikedMovie, dislikedMoviesList);

    if (isLiked) {
      return console.log('It is already on the disliked list!');
    }

    swipe('left');
    setTimeout(() => {
      const filteredMovies = removeMovieFromList(NewDislikedMovie, allMovies);
      setAllMovies(filteredMovies);
      addDislikedMovie(NewDislikedMovie);
      setShowAlert(false);
    }, 1000);

    return console.log('Movie disliked!');
  };

  const fetchMoreMovies = async () => {
    if (allMovies.length <= 2) {
      const newMovies = await fetchMovies('', actualPage + 1);
      if (newMovies) {
        setAllMovies([...newMovies, ...allMovies]);
        setActualPage(actualPage + 1);
      }
    }
  };

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const swiped = (index: number) => {
    updateCurrentIndex(index - 1);
  };

  const handleDirection = (direction = '') => {
    if (direction === 'left') {
      handleAddDislikedMovie(allMovies[currentIndex]);
    } else if (direction === 'right') {
      handleAddLikedMovie(allMovies[currentIndex]);
    }
  };

  const getMovies = async (page = 1) => {
    setIsLoading(true);
    const movies = await fetchMovies('', page);

    const hasMovieOnList = (movie: TMovie, movieList: TMovie[]) =>
      movieList.find((listMovie) => listMovie.id === movie.id);

    const filteredMovies = movies
      ? movies.filter((movie) => {
          const hasMovie =
            hasMovieOnList(movie, likedMoviesList) ||
            hasMovieOnList(movie, dislikedMoviesList);
          if (!hasMovie) return movie;
          return undefined;
        })
      : [];

    setCurrentIndex(filteredMovies.length - 1);
    setAllMovies(filteredMovies.reverse());
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies(actualPage);
  }, []);

  return (
    <Styled.CardsCarouselContainer>
      <AlertBox show={showAlert}>{alertText}</AlertBox>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {allMovies.map((movie, index) => {
            return (
              <TinderCard
                // @ts-ignore
                ref={childRefs[index]}
                className="swipe"
                key={movie.id}
                onSwipe={() => swiped(index)}
                onCardLeftScreen={() => fetchMoreMovies()}
              >
                <MovieCard movie={movie} />
              </TinderCard>
            );
          })}

          <Styled.CardsButtonsContainer>
            <button
              type="button"
              aria-label="Dislike movie"
              title="Dislike Movie"
              onClick={() => handleDirection('left')}
            >
              <Styled.DislikeButton />
            </button>

            <button
              type="button"
              aria-label="Like movie"
              title="Like Movie"
              onClick={() => handleDirection('right')}
            >
              <Styled.LikeButton />
            </button>
          </Styled.CardsButtonsContainer>
        </>
      )}
    </Styled.CardsCarouselContainer>
  );
}

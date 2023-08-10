import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TinderCard from 'react-tinder-card'
import MovieCard from '../movieCard/movieCard.jsx'

import {
  addLikedMovie,
  addDislikedMovie,
  setAllMovies,
  setActualPage
} from '../../redux/actions/moviesAction'

import { fetchMovies } from '../../utils/api'

import * as Styled from './cardsCarousel.styled.js'

export default function CardsCarousel({ movies }) {
  const [currentIndex, setCurrentIndex] = useState(movies.length - 1)
  const [lastDirection, setLastDirection] = useState()

  const likedMoviesList = useSelector((state) => state.movies.liked)
  const dislikedMoviesList = useSelector((state) => state.movies.disliked)
  const allMovies = useSelector((state) => state.movies.all)
  const actualPage = useSelector((state) => state.movies.actualPage)

  const dispatch = useDispatch()

  const childRefs = useMemo(() =>
    Array(movies.length).fill(0).map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const currentIndexRef = useRef(currentIndex)
  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
  }

  const canSwipe = currentIndex >= 0
  const swipe = async (dir) => {
    if (canSwipe && currentIndex < movies.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  const removeMovieFromList = (movieToRemove, movieList) =>
    movieList.filter((movie) => movie.id !== movieToRemove.id)

  const isOnList = (movie, movieList) => Boolean(
    movieList.find((listMovie) => listMovie.id === movie.id)
  )

  const handleAddLikedMovie = (newLikedMovie) => {
    const isLiked = isOnList(newLikedMovie, likedMoviesList)

    if (isLiked) {
      return console.log('It is already on the liked list!')
    }

    swipe('right')
    setTimeout(() => {
      const filteredMovies = removeMovieFromList(newLikedMovie, allMovies)
      dispatch(setAllMovies(filteredMovies))
      dispatch(addLikedMovie(newLikedMovie))
    }, 1000);
  }

  const handleAddDislikedMovie = (NewDislikedMovie) => {
    const isLiked = isOnList(NewDislikedMovie, dislikedMoviesList)

    if (isLiked) {
      return console.log('It is already on the disliked list!')
    }

    swipe('left')
    setTimeout(() => {
      const filteredMovies = removeMovieFromList(NewDislikedMovie, allMovies)
      dispatch(setAllMovies(filteredMovies))
      dispatch(addDislikedMovie(NewDislikedMovie))
    }, 1000);
  }

  useEffect(() => {
    const getMovies = async () => {
      dispatch(setActualPage(actualPage + 1))
      const newMovies = await fetchMovies('', actualPage + 1)

      const hasMovieOnList = (movie, movieList) =>
        movieList.find((listMovie) => listMovie.id === movie.id)

      const filteredMovies = newMovies.filter((movie) => {
        const hasMovie = hasMovieOnList(movie, likedMoviesList) ||
          hasMovieOnList(movie, dislikedMoviesList)
        if (!hasMovie) return movie
      })

      console.log([...allMovies, ...filteredMovies])
      dispatch(setAllMovies([...allMovies, ...filteredMovies]))
    }

    if (movies.length === 1) {
      getMovies()
    }
  }, [movies])

  useEffect(() => {
    if (lastDirection === 'left') {
      console.log('adiciona dislike')
      handleAddDislikedMovie(movies[currentIndex])
    } else if (lastDirection === 'right') {
      console.log('adiciona like')
      handleAddLikedMovie(movies[currentIndex])
    }
  }, [lastDirection])

  return (
    <>
      <Styled.CardsCarouselContainer>
        {movies.map((movie, index) => {
          return (
            <TinderCard
              ref={childRefs[index]}
              className='swipe'
              key={movie.id}
              onSwipe={(dir) => swiped(dir, movie.title, index)}
              onCardLeftScreen={() => outOfFrame(movie.title, index)}
            >
              <MovieCard movie={movie} />
            </TinderCard>
          )
        })}

        <Styled.CardsButtonsContainer>
          <button onClick={() => setLastDirection('left')}>
            <Styled.DislikeButton />
          </button>

          <button onClick={() => setLastDirection('right')}>
            <Styled.LikeButton />
          </button>
        </Styled.CardsButtonsContainer>
      </Styled.CardsCarouselContainer>
    </>
  )
}


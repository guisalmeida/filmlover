import React, { useState, useMemo, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TinderCard from 'react-tinder-card'

import MovieCard from '../movieCard/movieCard.jsx'
import Spinner from '../spinner/spinner.jsx'
import AlertBox from '../alertBox/alertBox.jsx'

import {
  addLikedMovie,
  addDislikedMovie,
  setAllMovies,
  setActualPage,
  setIsLoading
} from '../../redux/actions/moviesAction'

import { fetchMovies } from '../../utils/api'

import * as Styled from './cardsCarousel.styled.js'

export default function CardsCarousel() {
  const likedMoviesList = useSelector((state) => state.movies.liked)
  const dislikedMoviesList = useSelector((state) => state.movies.disliked)
  const allMovies = useSelector((state) => state.movies.all)
  const actualPage = useSelector((state) => state.movies.actualPage)
  const isLoading = useSelector((state) => state.movies.isLoading)

  const [currentIndex, setCurrentIndex] = useState(allMovies.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [showAlert, setShowAlert] = useState(false)
  const [alertText, setAlertText] = useState('')

  const dispatch = useDispatch()

  const childRefs = useMemo(() =>
    Array(allMovies.length).fill(0).map((i) => React.createRef()),
    [allMovies]
  )

  const getMovies = async (page = 1) => {
    dispatch(setIsLoading(true))
    const movies = await fetchMovies(undefined, page)
    const hasMovieOnList = (movie, movieList) =>
      movieList.find((listMovie) => listMovie.id === movie.id)

    const filteredMovies = movies.filter((movie) => {
      const hasMovie = hasMovieOnList(movie, likedMoviesList) ||
        hasMovieOnList(movie, dislikedMoviesList)
      if (!hasMovie) return movie
    })

    setCurrentIndex(filteredMovies.length - 1)
    dispatch(setAllMovies(filteredMovies.reverse()))
    dispatch(setIsLoading(false))
  }

  useEffect(() => {
    getMovies('', actualPage)
  }, [])

  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const currentIndexRef = useRef(currentIndex)
  const canSwipe = currentIndex >= 0

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    if (allMovies.length <= 1) {
      getMovies('', actualPage + 1)
      dispatch(setActualPage(actualPage + 1))
    }
  }

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < allMovies.length) {
      await childRefs[currentIndex].current.swipe(dir)
    }
  }

  const removeMovieFromList = (movieToRemove, movieList) =>
    movieList.filter((movie) => movie.id !== movieToRemove.id)

  const isOnList = (movie, movieList) => Boolean(
    movieList.find((listMovie) => listMovie.id === movie.id)
  )

  const handleAddLikedMovie = (newLikedMovie) => {
    setShowAlert(true)
    setAlertText('Movie liked!')
    const isLiked = isOnList(newLikedMovie, likedMoviesList)

    if (isLiked) {
      return console.log('It is already on the liked list!')
    }

    swipe('right')
    setTimeout(() => {
      const filteredMovies = removeMovieFromList(newLikedMovie, allMovies)
      dispatch(setAllMovies(filteredMovies))
      dispatch(addLikedMovie(newLikedMovie))
      setShowAlert(false)
    }, 1000);
  }

  const handleAddDislikedMovie = (NewDislikedMovie) => {
    setShowAlert(true)
    setAlertText('Movie disliked!')
    const isLiked = isOnList(NewDislikedMovie, dislikedMoviesList)

    if (isLiked) {
      return console.log('It is already on the disliked list!')
    }

    swipe('left')
    setTimeout(() => {
      const filteredMovies = removeMovieFromList(NewDislikedMovie, allMovies)
      dispatch(setAllMovies(filteredMovies))
      dispatch(addDislikedMovie(NewDislikedMovie))
      setShowAlert(false)
    }, 1000);
  }

  useEffect(() => {
    if (lastDirection === 'left') {
      handleAddDislikedMovie(allMovies[currentIndex])
      setLastDirection('')
    } else if (lastDirection === 'right') {
      handleAddLikedMovie(allMovies[currentIndex])
      setLastDirection('')
    }
  }, [lastDirection])

  return (
    <Styled.CardsCarouselContainer>

      <AlertBox show={showAlert}>{alertText}</AlertBox>

      {isLoading ? <Spinner /> :
        (
          <>
            {
              allMovies.map((movie, index) => {
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
              })
            }

            < Styled.CardsButtonsContainer >
              <button
                type="button"
                title="Dislike Movie"
                onClick={() => setLastDirection('left')}>
                <Styled.DislikeButton />
              </button>

              <button
                type="button"
                title="Like Movie"
                onClick={() => setLastDirection('right')}>
                <Styled.LikeButton />
              </button>
            </Styled.CardsButtonsContainer>
          </>
        )
      }

    </Styled.CardsCarouselContainer >
  )
}


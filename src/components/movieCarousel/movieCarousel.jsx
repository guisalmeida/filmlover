import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import MovieCard from '../movieCard/movieCard.jsx'

import {
  addLikedMovie,
  addDislikedMovie,
  setAllMovies,
  setActualPage
} from '../../redux/actions/moviesAction'

import { fetchMovies } from '../../utils/api'

import 'swiper/css'
import 'swiper/css/effect-cards'

import * as Styled from './movieCarousel.styled.js'

export default function MovieCarousel({ movies }) {
  const dispatch = useDispatch()

  const likedMoviesList = useSelector((state) => state.movies.liked)
  const dislikedMoviesList = useSelector((state) => state.movies.disliked)
  const allMovies = useSelector((state) => state.movies.all)
  const actualPage = useSelector((state) => state.movies.actualPage)

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

    const filteredMovies = removeMovieFromList(newLikedMovie, allMovies)
    dispatch(setAllMovies(filteredMovies))
    dispatch(addLikedMovie(newLikedMovie))
  }

  const handleAddDislikedMovie = (NewDislikedMovie) => {
    const isLiked = isOnList(NewDislikedMovie, dislikedMoviesList)

    if (isLiked) {
      return console.log('It is already on the disliked list!')
    }

    const filteredMovies = removeMovieFromList(NewDislikedMovie, allMovies)
    dispatch(setAllMovies(filteredMovies))
    dispatch(addDislikedMovie(NewDislikedMovie))
  }

  const getMovies = async () => {
    dispatch(setActualPage(actualPage + 1))
    const movies = await fetchMovies('', actualPage + 1)

    const hasMovieOnList = (movie, movieList) =>
      movieList.find((listMovie) => listMovie.id === movie.id)

    const filteredMovies = movies.filter((movie) => {
      const hasMovie = hasMovieOnList(movie, likedMoviesList) ||
        hasMovieOnList(movie, dislikedMoviesList)
      if (!hasMovie) return movie
    })

    console.log([...allMovies, ...filteredMovies])
    dispatch(setAllMovies([...allMovies, ...filteredMovies]))
  }


  return (
    <Styled.MovieCarousel>
      <Swiper
        className="mySwiper"
        effect={'cards'}
        modules={[EffectCards]}
        cardsEffect={{ perSlideOffset: 1, perSlideRotate: 1 }}
        loop={true}
        onSlideChange={(swiper) => {
          if (swiper.activeIndex > swiper.previousIndex) {
            console.log(movies[swiper.activeIndex - 1]);
            handleAddDislikedMovie(movies[swiper.activeIndex - 1])
          } else {
            console.log(movies[swiper.activeIndex + 1]);
            handleAddLikedMovie(movies[swiper.activeIndex + 1])
          }
        }}
        onReachEnd={() => getMovies()}
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id || 0} >
            <MovieCard movie={movie} likeButtons={false} />
          </SwiperSlide>
        ))}
      </Swiper>


    </Styled.MovieCarousel>
  )
}

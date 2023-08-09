import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useSwiper } from 'swiper/react'
import {
	addlikedMovie,
	addDislikedMovie,
	setAllMovies,
	setLikedMovies,
	setDislikedMovies
} from '../../redux/actions/moviesAction'

import { MOVIE_GENRES, IMAGE_URL } from '../../utils/api'

import * as Styled from './movieCard.styled'

export default function MovieCard({ movie }) {
	const dispatch = useDispatch()
	const swiper = useSwiper();

	const likedMoviesList = useSelector((state) => state.movies.liked)
	const dislikedMoviesList = useSelector((state) => state.movies.disliked)
	const allMovies = useSelector((state) => state.movies.all)

	const location = useLocation()
	const showButtons = location.pathname !== '/favorites' && location.pathname !== '/wallofshame'
	const showCloseButton = !showButtons

	const whichLocation = () => {
		if (location.pathname === '/favorites') {
			return 'favorites'
		}
		if (location.pathname === '/wallofshame') {
			return 'wall of shame'
		}
		return ''
	}

	const removeMovieFromList = (movieToRemove, movieList) =>
		movieList.filter((movie) => movie.id !== movieToRemove.id)

	const isOnList = (movie, movieList) => Boolean(
		movieList.find((listMovie) => listMovie.id === movie.id)
	)

	const addLikeMovie = (newLikedMovie) => {
		const isLiked = isOnList(newLikedMovie, likedMoviesList)

		if (isLiked) {
			return console.log('It is already on the liked list!')
		}

		const filteredMovies = removeMovieFromList(newLikedMovie, allMovies)
		dispatch(setAllMovies(filteredMovies))
		dispatch(addlikedMovie(movie))
		swiper.slidePrev()
	}

	const addDislikeMovie = (NewDislikedMovie) => {
		const isLiked = isOnList(NewDislikedMovie, dislikedMoviesList)

		if (isLiked) {
			return console.log('It is already on the disliked list!')
		}

		const filteredMovies = removeMovieFromList(NewDislikedMovie, allMovies)
		dispatch(setAllMovies(filteredMovies))
		dispatch(addDislikedMovie(NewDislikedMovie))
		swiper.slideNext()
	}

	const removeMovieFromDislikedList = (dislikedMovie) => {
		const isDisliked = isOnList(dislikedMovie, dislikedMoviesList)

		if (!isDisliked) {
			return console.log('It is not on the disliked list!')
		}

		const updatedDislikedList = removeMovieFromList(dislikedMovie, dislikedMoviesList)
		dispatch(setDislikedMovies(updatedDislikedList))
	}

	const removeMovieFromLikedList = (likedMovie) => {
		const isDisliked = isOnList(likedMovie, likedMoviesList)

		if (!isDisliked) {
			return console.log('It is not on the liked list!')
		}

		const updatedLikedList = removeMovieFromList(likedMovie, likedMoviesList)
		dispatch(setLikedMovies(updatedLikedList))
	}

	const imageUrl = movie.poster_path ? IMAGE_URL + movie.poster_path : '/not-found.png'

	return (
		<Styled.MovieCardContainer imageUrl={imageUrl} >
			<img className='imagePoster' src={imageUrl} alt={movie.title} />

			{showButtons ?
				<Styled.MovieCardButtons>
					<button
						type="button"
						title="Dislike Movie"
						onClick={() => addDislikeMovie(movie)}
					>
						<Styled.DislikeButton />
					</button>

					<button
						type="button"
						title="Like Movie"
						onClick={() => addLikeMovie(movie)}
					>
						<Styled.LikeButton />
					</button>
				</Styled.MovieCardButtons> : null
			}

			{movie.overview ?
				<Styled.MovieOverview>
					<p>{movie.overview}</p>
				</Styled.MovieOverview>
				: null}

			{/* <p className='flag'>like</p> */}

			{
				showCloseButton &&
				<Styled.CloseButton
					type="button"
					title={`Remove from ${whichLocation()}`}
					onClick={() => {
						if (location.pathname === '/favorites') {
							removeMovieFromLikedList(movie)
						} else if (location.pathname === '/wallofshame')
							removeMovieFromDislikedList(movie)
					}}
				>
					<Styled.RemoveIcon />
				</Styled.CloseButton>
			}

			<Styled.MovieCardActions>
				<h3>{movie.title}</h3>
				{/* <p className='votes'>TMDB: {movie.vote_average}</p> */}

				<Styled.genreContainer>
					{movie.genre_ids.map((cod, i) => {
						if (i > 2) return
						const genre = MOVIE_GENRES.find((m) => m.id === cod)
						return (<p key={cod}>{genre.name}</p>)
					})}
				</Styled.genreContainer>

			</Styled.MovieCardActions>
		</Styled.MovieCardContainer >
	)
}

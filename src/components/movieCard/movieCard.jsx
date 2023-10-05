import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
	addLikedMovie,
	addDislikedMovie,
	setAllMovies,
	setLikedMovies,
	setDislikedMovies
} from '../../redux/reducers/moviesReducer'

import GenreBox from '../genreBox/genreBox'

import { MOVIE_GENRES, IMAGE_URL } from '../../utils/api'

import * as Styled from './movieCard.styled'

export default function MovieCard({ movie }) {
	const dispatch = useDispatch()

	const likedMoviesList = useSelector((state) => state.movies.liked)
	const dislikedMoviesList = useSelector((state) => state.movies.disliked)
	const allMovies = useSelector((state) => state.movies.all)

	const location = useLocation()
	const showButtons = location.pathname === '/search'
	const showCloseButton = location.pathname === '/favorites' || location.pathname === '/wallofshame'

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

	const removeMovieFromDislikedList = (dislikedMovie) => {
		const isDisliked = isOnList(dislikedMovie, dislikedMoviesList)

		if (!isDisliked) {
			return console.log('It is not on the disliked list!')
		}

		const updatedDislikedList = removeMovieFromList(dislikedMovie, dislikedMoviesList)
		dispatch(setDislikedMovies(updatedDislikedList))
		dispatch(setAllMovies([...allMovies, dislikedMovie]))
	}

	const removeMovieFromLikedList = (likedMovie) => {
		const isDisliked = isOnList(likedMovie, likedMoviesList)

		if (!isDisliked) {
			return console.log('It is not on the liked list!')
		}

		const updatedLikedList = removeMovieFromList(likedMovie, likedMoviesList)
		dispatch(setLikedMovies(updatedLikedList))
		dispatch(setAllMovies([...allMovies, likedMovie]))
	}

	const imageUrl = movie.poster_path ? IMAGE_URL + movie.poster_path : '/not-found.png'

	return (
		<Styled.MovieCardContainer imageUrl={imageUrl} >
			<img
				className='imagePoster'
				src={imageUrl}
				alt={movie.title}
				loading='lazy'
			/>

			{showButtons ?
				<Styled.MovieCardButtons>
					<button
						type="button"
						title="Dislike Movie"
						onClick={() => handleAddDislikedMovie(movie)}
					>
						<Styled.DislikeButton />
					</button>

					<button
						type="button"
						title="Like Movie"
						onClick={() => handleAddLikedMovie(movie)}
					>
						<Styled.LikeButton />
					</button>
				</Styled.MovieCardButtons> : null
			}

			{movie.overview ?
				<Styled.MovieOverview>
					<p>{movie.overview}</p>
				</Styled.MovieOverview>
				: null
			}

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
				<div className='title-container'>
					<h3>{movie.title}</h3>
					<p className='votes'>
						<Styled.StarIcon />
						{movie.vote_average.toFixed(1)}
					</p>
				</div>

				<Styled.genreContainer>
					{movie.genre_ids.map((cod, i) => {
						if (i > 2) return
						const genre = MOVIE_GENRES.find((m) => m.id === cod)
						return (<GenreBox key={cod}>{genre.name}</GenreBox>)
					})}
				</Styled.genreContainer>

			</Styled.MovieCardActions>
		</Styled.MovieCardContainer >
	)
}

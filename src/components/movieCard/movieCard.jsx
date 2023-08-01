import * as styled from './movieCard.styled'
import { useDispatch } from 'react-redux'
import { likeMovie, dislikeMovie } from '../../redux/actions/moviesAction'

export default function MovieCard({ movie }) {
	const IMAGE_URL = 'http://image.tmdb.org/t/p/w500'
	const dispatch = useDispatch()

	const addLikeMovie = (movie) => {
		dispatch(likeMovie(movie))
	}

	const addDislikeMovie = (movie) => {
		dispatch(dislikeMovie(movie))
	}

	return (
		<styled.MovieCardContainer>
			<img src={IMAGE_URL + movie.poster_path} alt={movie.title} />

			<styled.MovieCardActions>
				<h3>{movie.title}</h3>
				<p>TMDB: {movie.vote_average}</p>

				<styled.MovieCardButtons>
					<button
						type="button"
						onClick={() => addDislikeMovie(movie)}
					>
						<styled.DislikeButton />
					</button>

					<button
						type="button"
						onClick={() => addLikeMovie(movie)}
					>
						<styled.LikeButton />
					</button>
				</styled.MovieCardButtons>

			</styled.MovieCardActions>
		</styled.MovieCardContainer>
	)
}

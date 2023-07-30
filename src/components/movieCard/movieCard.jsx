import * as styled from './movieCard.styled'

export default function MovieCard({ movie }) {
	const IMAGE_URL = 'http://image.tmdb.org/t/p/w500'
	return (
		<styled.MovieCardContainer>
			<img src={IMAGE_URL + movie.poster_path} alt={movie.title} />

			<styled.MovieCardActions>
				<h3>{movie.title}</h3>
				<p>TMDB: {movie.vote_average}</p>

				<styled.MovieCardButtons>
					<button
						type="button"
						onClick={() => console.log('dislike')}
					>
						<styled.DislikeButton />
					</button>

					<button
						type="button"
						onClick={() => console.log('like')}
					>
						<styled.LikeButton />
					</button>
				</styled.MovieCardButtons>

			</styled.MovieCardActions>
		</styled.MovieCardContainer>
	)
}

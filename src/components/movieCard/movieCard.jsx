import React from 'react'

export default function movieCard({ movie, image }) {

	return (
		<>
			<img src={image} alt={movie.title} />
			<p>{movie.title}</p>
		</>
	)
}

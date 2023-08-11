import styled from 'styled-components'
import media from 'styled-media-query'

import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'

export const SearchForm = styled.form`
	position: relative;
	width: 70%;
	display: flex;
	align-items: center;

	${media.lessThan('medium')`
		width: 100%;
	`}

	input {
		width: 100%;
		color: white;
		padding: 0 1rem;
		height: 2rem;
		border-radius: 2rem;
		border: var(--border);
		background: var(--background);
		font-size: 1rem;

		${media.lessThan('medium')`
			height: 3rem;
		`}
	}

	button {
		position: absolute;
		right: .5rem;
		cursor: pointer;
	}
`


export const SearchIcon = styled(SearchOutline)`
	color: white;
	width: 1rem;

	${media.lessThan('medium')`
		width: 1.5rem;
	`}
`


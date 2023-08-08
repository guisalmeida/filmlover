import styled from 'styled-components'
import media from 'styled-media-query'

import { Home } from '@styled-icons/boxicons-solid/Home'
import { Star } from '@styled-icons/evaicons-solid/Star'
import { HeartDislike } from '@styled-icons/ionicons-solid/HeartDislike'

export const MenuBarMobile = styled.section`
	position: fixed;
	bottom: 0;
	left: 0;
	height: 3rem;
	width: 100%;
	background: var(--background);
	align-items: center;
	z-index: 2;
	
	display: none;
	
	${media.lessThan('medium')`
		display: flex;
	`}

	.user {
		height: 1.5rem;
		border-radius: 50%;
	}
`

export const MenuBar = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

export const HomeIcon = styled(Home)`
	width: 1.5rem;
	color: white;
`
export const StarIcon = styled(Star)`
	width: 1.5rem;
	color: white;
`
export const DislikeIcon = styled(HeartDislike)`
	width: 1.5rem;
	color: white;
`

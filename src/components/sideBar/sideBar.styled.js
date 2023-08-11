import styled from 'styled-components'
import media from 'styled-media-query'


import { Home } from '@styled-icons/boxicons-solid/Home'
import { Star } from '@styled-icons/evaicons-solid/Star'
import { HeartDislike } from '@styled-icons/ionicons-solid/HeartDislike'

export const SideBar = styled.aside`
  display: none;
  position: fixed;
  top: 0;
  left: 0;

  width: 16rem;
  height: 100vh;
  padding: 2rem;
  /* background: var(--background);
  border-radius: 1rem;
  filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.3)); */
  /* margin: 1rem; */
  z-index: 2;

  /* align-items: center; */
  flex-direction: column;

  .logo {
    width: 10rem;
  }
	
	${media.greaterThan('medium')`
		display: flex;
	`}
`

export const MenuContainer = styled.nav`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  
  a {
    text-decoration: none;
    font-size: 1rem;
    color: white;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    
    @media (hover: hover){
      &:hover {
        color: var(--highlight);
      }
    }
  }
  

  p {
    margin-left: 0.5rem;

  }
`

export const HomeIcon = styled(Home)`
	width: 1.25rem;
	color: white;
  transition: all 0.3s ease;
  
  ${MenuContainer} > a.active & {
	color: var(--highlight);
  }
`
export const StarIcon = styled(Star)`
	width: 1.25rem;
	color: white;
  transition: all 0.3s ease;

  ${MenuContainer} > a.active & {
    color: var(--highlight);
  }
`
export const DislikeIcon = styled(HeartDislike)`
	width: 1.25rem;
	color: white;
  transition: all 0.3s ease;

  ${MenuContainer} > a.active & {
    color: var(--highlight);
  }
`

`
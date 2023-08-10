import styled from 'styled-components'
import media from 'styled-media-query'

import { HeartCircle } from '@styled-icons/ionicons-outline/HeartCircle'
import { HeartDislikeCircle } from '@styled-icons/ionicons-outline/HeartDislikeCircle'

export const CardsCarouselContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 6rem);
  position: relative;
  overflow: hidden;
  padding: 0 0 0 16rem;
  margin: 4rem 0 2rem;
  transition: all 0.3s ease;
  
  ${media.lessThan('medium')`
    padding: 1rem;
    margin: 4rem 0 2rem;
    height: calc(100vh - 9rem);
	`}

  .swipe {
    position: absolute;
    max-width: 250px;

    & > div {
      filter: none;
    }
  }
`

export const CardsButtonsContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  ${media.lessThan('medium')`
    justify-content: space-between;
	`}
`

export const LikeButton = styled(HeartCircle)`
  border-radius: 50%;
  width: 4rem;
  transition: all 0.3s ease;
  background: rgba(29, 39, 53, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  color: white;
  cursor: pointer;
  
  @media (hover: hover){
    &:hover {
      color: green;
    }
  }
`

export const DislikeButton = styled(HeartDislikeCircle)`
  border-radius: 50%;
  width: 4rem;
  transition: all 0.3s ease;
  background: rgba(29, 39, 53, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  color: white;
  cursor: pointer;
  
  @media (hover: hover){
    &:hover {
      color: red;
    }
  }
`
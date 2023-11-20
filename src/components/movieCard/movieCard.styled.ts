import styled from 'styled-components'
import media from 'styled-media-query'

import { HeartCircle } from '@styled-icons/ionicons-outline/HeartCircle'
import { HeartDislikeCircle } from '@styled-icons/ionicons-outline/HeartDislikeCircle'
import { DeleteOutline } from '@styled-icons/typicons/DeleteOutline'
import { Star } from '@styled-icons/evaicons-solid/Star'

type MovieCardContainerProps = {
  $imageUrl: string
}

export const MovieCardContainer = styled.div<MovieCardContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 1rem;
  background: var(--dark);
  filter: drop-shadow(2px 2px 10px rgba(0,0,0,0.2));
  transition: all 0.3s ease;
  
  &::before {
    content: "";
    position: absolute;
    -webkit-filter: blur(3px);
    filter: blur(3px);
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: bottom center;
    background-size: 130%;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.$imageUrl});
    opacity: 0.3;
    z-index: -1;
  }

  .imagePoster {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`

export const MovieCardActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  z-index: 1;
  
  ${media.lessThan('medium')`
    margin: 0;
  `}

  h3 {
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.2;
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    
    ${media.lessThan('medium')`
      font-size: 0.75rem;
    `}
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.75rem;

    ${media.lessThan('medium')`
      margin: 0;
      flex-direction: column;
    `}
  }

  .votes {
    color: black;
    font-weight: bold;
    font-size: 0.75rem;
    background-color: orange;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;

    ${media.lessThan('medium')`
      margin: 0.5rem 0 0;
      flex-direction: column;
    `}
  }
`

export const genreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 1.25rem;
  overflow: hidden;

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const MovieOverview = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;

  border-radius: 1rem;

  padding: 1rem;
  margin: 1rem;
  
  background: rgba(19, 19, 26, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  user-select: none;

  @media (hover: hover){
    ${MovieCardContainer}:hover & {
      display: inline-block;
    }
  }
  
  p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    line-height: 1.2;
  }
`

export const MovieCardButtons = styled.div`
  position: absolute;
  top: calc(50% - 2rem);
  display: none;
  justify-content: space-between;
  width: 100%;
  transition: all 0.3s ease;

  @media (hover: hover){
    ${MovieCardContainer}:hover & {
      display: flex;
    }
  }
  
  ${media.lessThan('medium')`
    margin-bottom: 0.5rem;
    display: flex;
  `}
`

export const LikeButton = styled(HeartCircle)`
  border-radius: 50%;
  width: 3rem;
  transition: all 0.3s ease;
  background: rgba(29, 39, 53, 0.6);
  background: var(--background-gradient-webkit);
  background: var(--background-gradient);
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
  width: 3rem;
  transition: all 0.3s ease;
  background: var(--dark);
  background: var(--background-gradient-webkit);
  background: var(--background-gradient);
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
export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.25rem;
  cursor: pointer;
`
export const RemoveIcon = styled(DeleteOutline)`
  transition: all 0.3s ease;
  color: white;
  border-radius: 50%;
  background: rgba(29, 39, 53, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  width: 2rem;
  
  @media (hover: hover){
    &:hover{
      color: var(--highlight);
    }
  }
`

export const StarIcon = styled(Star)`
	width: 0.75rem;
	color: black;
  margin-right: 0.25rem;

  ${media.lessThan('medium')`
    margin-right: 0;
  `}
`
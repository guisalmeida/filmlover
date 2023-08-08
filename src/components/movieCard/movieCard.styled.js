import styled from 'styled-components'
import media from 'styled-media-query'

import { HeartCircle } from '@styled-icons/ionicons-outline/HeartCircle'
import { HeartDislikeCircle } from '@styled-icons/ionicons-outline/HeartDislikeCircle'
import { RemoveCircleOutline } from '@styled-icons/material/RemoveCircleOutline'

export const MovieCardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  overflow: hidden;
  margin: 0 auto;
  border-radius: 1rem;
  background: var(--background);
  filter: drop-shadow(2px 2px 10px rgba(0,0,0,0.3));
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
    background-image: url(${(props) => props.imageUrl});
    opacity: 0.1;
    z-index: -1;
  }

  &:hover {
    background: var(--highlight);
  }

  img {
    width: 100%;
    max-width: 310px;
    height: auto;
  }
`

export const MovieCardActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5rem auto;
  z-index: 1;
  
  ${media.lessThan('medium')`
    margin: 0;
    font-size: 0.75rem;
  `}

  h3 {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    line-height: 1.6;
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    
    ${media.lessThan('medium')`
      margin: 1rem;
      font-size: 0.75rem;
    `}
  }

  .votes {
    color: black;
    font-weight: bold;
    font-size: 0.75rem;
    background-color: orange;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  }

  .flag {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    padding: 1rem;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 3rem;
  }
`

export const genreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${media.lessThan('medium')`
    display: none;
  `}

  p {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(224, 32, 65, 0.5);
    color: var(--highlight);
    font-size: 0.625rem;
    font-weight: bold;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const MovieCardButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  ${media.lessThan('medium')`
    margin-bottom: 0.5rem
  `}
`

export const LikeButton = styled(HeartCircle)`
  color: green;
  border-radius: 50%;
  width: 3rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: green;
    color: white;
  }
`

export const DislikeButton = styled(HeartDislikeCircle)`
  color: red;
  border-radius: 50%;
  width: 3rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: red;
    color: white;
  }
`
export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.25rem;
  cursor: pointer;
`
export const RemoveIcon = styled(RemoveCircleOutline)`
  transition: all 0.3s ease;
  color: white;
  width: 2rem;
  border-radius: 50%;
  background: rgba(29, 39, 53, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  &:hover{
    color: var(--highlight);
  }
`
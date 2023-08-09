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

  width: 100%;
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
    font-size: 0.75rem;
  `}

  h3 {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    
    ${media.lessThan('medium')`
      margin: 0;
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1.25rem;
  overflow: hidden;

  ${media.lessThan('medium')`
    display: none;
  `}

  p {
    padding: 0.25rem 0.5rem;
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

export const MovieOverview = styled.p`
  display: none;
  position: absolute;
  top: 0;
  left: 0;

  border-radius: 1rem;

  padding: 1rem;
  margin: 1rem;
  
  background: rgba(29, 39, 53, 0.6);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  @media (hover: hover){
    ${MovieCardContainer}:hover & {
      display: inline-block;
    }
  }
  
  p {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 10;
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
export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.25rem;
  cursor: pointer;
`
export const RemoveIcon = styled(RemoveCircleOutline)`
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
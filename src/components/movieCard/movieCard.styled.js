import styled from 'styled-components'
import { HeartCircle } from '@styled-icons/ionicons-outline/HeartCircle'
import { HeartDislikeCircle } from '@styled-icons/ionicons-outline/HeartDislikeCircle'
import { RemoveCircleOutline } from '@styled-icons/material/RemoveCircleOutline'

export const MovieCardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 352px;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 10px;
  filter: drop-shadow(2px 2px 20px rgba(0,0,0,0.5));

  img {
    width: 100%;
  }

`

export const MovieCardActions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 100%;
  padding: 20px;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 270px;
    background-image: linear-gradient(to top, #141414, rgba(20, 20, 20, 0));
    z-index: -1;
  }

  h3 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
  }

  .votes {
    color: black;
    font-weight: bold;
    background-color: orange;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    margin: 0 0 20px;
    font-size: 1rem;
  }

  .flag {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    padding: 1rem;
    border-radius: 10px;
    font-weight: bold;
    font-size: 3rem;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`

export const MovieCardButtons = styled.div``

export const LikeButton = styled(HeartCircle)`
  color: green;
  border-radius: 50%;
  width: 50px;
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
  width: 50px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: red;
    color: white;
  }
`

export const RemoveIcon = styled(RemoveCircleOutline)`
  color: white;
  width: 40px;
`
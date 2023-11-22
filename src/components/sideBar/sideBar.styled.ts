import styled from 'styled-components';
import media from 'styled-media-query';

import { Home } from '@styled-icons/boxicons-solid/Home';
import { Star } from '@styled-icons/evaicons-solid/Star';
import { HeartDislike } from '@styled-icons/ionicons-solid/HeartDislike';

export const SideBar = styled.aside`
  display: none;
  position: fixed;
  top: 0;
  left: 0;

  width: 18rem;
  height: 100vh;
  padding: 1rem;
  z-index: 2;

  align-items: center;
  flex-direction: column;

  .logo {
    width: 10rem;
    margin-top: 1rem;
  }

  h3.genre-title {
    margin-top: 2rem;
    font-weight: bold;

    ${media.lessThan('medium')`
      display: none;
    `}
  }

  ${media.greaterThan('medium')`
		display: flex;
	`}
`;

export const MenuContainer = styled.nav`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  background: var(--dark);
  padding: 0;
  border-radius: 1rem;
  width: 100%;

  a {
    text-decoration: none;
    font-size: 1rem;
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    background: var(--dark);
    border-radius: 1rem;

    &.active {
      background: -webkit-linear-gradient(
        to bottom right,
        var(--dark),
        rgba(224, 32, 65, 0.2)
      );
      background: linear-gradient(
        to bottom right,
        var(--dark),
        rgba(224, 32, 65, 0.2)
      );
    }

    &:last-child {
      margin-bottom: 0;
    }

    @media (hover: hover) {
      &:hover {
        color: var(--highlight);
      }
    }
  }

  p {
    margin-left: 0.5rem;
  }
`;

export const HomeIcon = styled(Home)`
  width: 1.25rem;
  color: white;
  transition: all 0.3s ease;

  ${MenuContainer} > a.active & {
    color: var(--highlight);
  }
`;
export const StarIcon = styled(Star)`
  width: 1.25rem;
  color: white;
  transition: all 0.3s ease;

  ${MenuContainer} > a.active & {
    color: var(--highlight);
  }
`;
export const DislikeIcon = styled(HeartDislike)`
  width: 1.25rem;
  color: white;
  transition: all 0.3s ease;

  ${MenuContainer} > a.active & {
    color: var(--highlight);
  }
`;

export const GenreContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 1rem 0.5rem;
  margin-top: 1rem;
  width: 100%;
  border-radius: 1rem;
  background: var(--dark);
  background: var(--background-gradient-webkit);
  background: var(--background-gradient);

  ${media.lessThan('medium')`
		display: none;
	`}

  .genre-button {
    cursor: pointer;
  }
`;

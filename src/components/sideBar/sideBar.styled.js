import styled from 'styled-components'
import media from 'styled-media-query'

export const SideBar = styled.aside`
  display: none;
  position: fixed;
  top: 0;
  left: 0;

  width: 16rem;
  height: calc(100vh - 2rem);
  padding: 2rem;
  background: var(--background);
  border-radius: 1rem;
  filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.3));
  margin: 1rem;
  z-index: 2;

  align-items: center;
  flex-direction: column;

  img {
    width: 10rem;
  }
	
	${media.greaterThan('medium')`
		display: flex;
	`}
`
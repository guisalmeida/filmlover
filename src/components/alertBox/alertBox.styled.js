import styled from 'styled-components'
import media from 'styled-media-query'

export const AlertBoxContainer = styled.div`
  padding: 1rem 2rem;
  border-radius: 1rem;

  background: rgba(29, 39, 53, 0.6);
  background: -webkit-linear-gradient(to bottom right, var(--dark), rgba(224,32,65,0.2));
  background: linear-gradient(to bottom right, var(--dark), rgba(224,32,65,0.2));
  
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);

  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
    top: 200px;
    left: calc(50% - 113px);
	`}

  p {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .logo {
    width: 3rem;
    margin-right: 1rem;
  }
  
  `
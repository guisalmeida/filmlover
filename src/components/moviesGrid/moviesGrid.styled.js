import styled from 'styled-components'
import media from 'styled-media-query'

export const MoviesGridContainer = styled.section`
  margin: 7rem 0px 4rem 18rem;
  padding: 0 0 0 1rem;
  width: calc(100% - 18rem);
  
  ${media.lessThan('medium')`
    padding: 0 1rem;
    width: 100%;
    margin: 6rem 0 5rem;
	`}
  
  h2 {
    font-size: 2rem;
    margin: 0 0 2rem;
    font-weight: bold;

    ${media.lessThan('medium')`
      font-size: 1rem;
      margin-bottom: 1rem;
      text-align: center;
    `}
  }
`

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 295px));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;

  ${media.lessThan('medium')`
    width: 100%;
    max-width: 320px;
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(120px, 320px));
	`}
`
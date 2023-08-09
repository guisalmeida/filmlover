import styled from 'styled-components'
import media from 'styled-media-query'

export const MoviesGridContainer = styled.section`
  margin: calc(4rem + 60px) 0 4rem 18rem;
  padding: 0 2rem;
  width: calc(100% - 18rem);
  
  ${media.lessThan('medium')`
    padding: 0 1rem;
    width: 100%;
    margin: 6rem 0 4rem;
	`}
  
  h2 {
    font-size: 2rem;
    margin: 0 0 2rem;
    font-weight: bold;

    ${media.lessThan('medium')`
      font-size: 1rem;
      margin-bottom: 1rem;
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
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	`}
`
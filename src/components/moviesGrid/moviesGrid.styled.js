import styled from 'styled-components'

export const MoviesGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  margin: calc(4rem + 60px) 4rem 4rem 4rem;
`
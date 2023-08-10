import styled from 'styled-components'
import media from 'styled-media-query'

export const MovieCarousel = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 18rem);
  margin: 6rem 0 6rem 18rem;

  ${media.lessThan('medium')`
    height: calc(100vh - 4rem);
	`}

  .swiper {
    width: 250px;
    height: auto;
  }

  .swiper-slide {
    border-radius: 1rem;
  }
`
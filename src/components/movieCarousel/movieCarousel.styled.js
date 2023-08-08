import styled from 'styled-components'
import media from 'styled-media-query'

export const MovieCarousel = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${media.lessThan('medium')`
    height: calc(100vh - 3rem);
	`}

  .swiper {
    width: 300px;
    height: 400px;
  }

  .swiper-slide {
    border-radius: 1rem;
  }
`
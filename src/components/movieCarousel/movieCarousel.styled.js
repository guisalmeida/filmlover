import styled from 'styled-components'

export const MovieCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .swiper {
    width: 352px;
    height: 528px;
  }

  .swiper-slide {
    border-radius: 1rem;
  }
`
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import MovieCard from '../movieCard/movieCard.jsx'

import 'swiper/css'
import 'swiper/css/effect-cards'

import * as Styled from './movieCarousel.styled.js'

export default function MovieCarousel({ movies }) {
  return (
    <Styled.MovieCarousel>
      <Swiper
        className="mySwiper"
        effect={'cards'}
        modules={[EffectCards]}
        cardsEffect={
          {
            perSlideOffset: 1,
            perSlideRotate: 1
          }
        }
        loop={true}
      // onSlideChange={() => console.log('slide change')}
      // onReachEnd={() => console.log('end!')}
      // onSwiper={(swiper) => swiper.slideNext()}
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id} >
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.MovieCarousel>
  )
}

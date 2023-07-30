import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'
import MovieCard from '../movieCard/movieCard.jsx'

import * as Styled from './movieCarousel.styled.js'

export default function MovieCarousel({ movies }) {
  return (
    <Styled.MovieCarousel>
      <Swiper
        effect={'cards'}
        modules={[EffectCards]}
        centeredSlides={true}
        // cardEffect={
        //   {
        //     rotate: false,
        //     slideShadows: false,
        //     perSlideOffset: 0,
        //     perSlideRotate: 0
        //   }
        // }
        grabCursor={true}
        // loop={true}
        className="mySwiper"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        onReachEnd={() => console.log('end!')}
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

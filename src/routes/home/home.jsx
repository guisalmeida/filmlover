import { useSelector } from 'react-redux'

import CardsCarousel from '../../components/cardsCarousel/cardsCarousel'

export default function Home() {
  const allMovies = useSelector((state) => state.movies.all)
  return (
    <CardsCarousel movies={allMovies} />
  )
}

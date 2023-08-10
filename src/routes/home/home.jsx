import { useSelector } from 'react-redux'
import MovieCarousel from '../../components/movieCarousel/movieCarousel'
import CardsCarousel from '../../components/cardsCarousel/cardsCarousel'

export default function Home() {
  const allMovies = useSelector((state) => state.movies.all)
  return (
    <CardsCarousel movies={allMovies} />
  )
}

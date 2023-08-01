import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { setAllMovies } from './redux/actions/moviesAction'
import { fetchMovies } from './utils/api'

import Layout from './routes/layout/layout'
import Home from './routes/home/home'
import Search from './routes/search/search'
import WallOfShame from './routes/wallofshame/wallOfShame'
import Favorites from './routes/favorites/favorites'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies()
      dispatch(setAllMovies(movies))
    }
    getMovies()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/wallofshame" element={<WallOfShame />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  )
}

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setMovies } from '../../redux/actions/moviesAction'
import * as Styled from './search.styled.js'
import { fetchMovies } from '../../utils/api'

export default function Search() {
  const [searchKey, setSearchKey] = useState("")
  const dispatch = useDispatch()

  const searchMovies = async (e) => {
    e.preventDefault()
    const searchMovies = await fetchMovies(searchKey)
    dispatch(setMovies(searchMovies))
    setSearchKey("")
  }

  return (
    <form onSubmit={searchMovies}>
      <input type="text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} />
      <button type="submit">
        <Styled.SearchIcon />
      </button>
    </form>
  )
}

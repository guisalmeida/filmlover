import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"

import { setSearchMovies } from '../../redux/actions/moviesAction'
import { fetchMovies } from '../../utils/api'

import * as Styled from './searchBar.styled.js'

export default function SearchBar() {
  const [searchKey, setSearchKey] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const searchMovies = async (e) => {
    e.preventDefault()
    const searchMovies = await fetchMovies(searchKey)
    dispatch(setSearchMovies(searchMovies))
    setSearchKey("")
    navigate("/search");
  }

  return (
    <form onSubmit={searchMovies}>
      <input
        type="text"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <button type="submit">
        <Styled.SearchIcon />
      </button>
    </form>
  )
}

import { useState } from 'react'
import * as Styled from './search.styled.js'

export default function search({ fetchMovies }) {
  const [searchKey, setSearchKey] = useState("")
  const searchMovies = (e) => {
    e.preventDefault()
    fetchMovies(searchKey)
  }

  return (
    <form onSubmit={searchMovies}>
      <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
      <button type="submit">
        <Styled.SearchIcon />
      </button>
    </form>
  )
}

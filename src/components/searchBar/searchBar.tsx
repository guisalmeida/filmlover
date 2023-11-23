import { FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMovies } from '../../utils/api';
import { MoviesContext } from '../../context/moviesContext';

import * as Styled from './searchBar.styled.js';

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState('');
  const { setSearchResult } = useContext(MoviesContext);

  const searchMovies = async (e: FormEvent) => {
    e.preventDefault();
    const searchedMovies = await fetchMovies(searchKey);
    if (searchedMovies) {
      setSearchResult(searchedMovies);
      setSearchKey('');
      navigate('/search', { state: { title: searchKey } });
    }
  };

  return (
    <Styled.SearchForm onSubmit={searchMovies}>
      <input
        name="search field"
        type="text"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        placeholder="Search movie..."
      />
      <button type="submit" aria-label="Search input" name="search button">
        <Styled.SearchIcon />
      </button>
    </Styled.SearchForm>
  );
}

import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setSearchMovies } from '../../redux/reducers/moviesReducer';
import { fetchMovies } from '../../utils/api';

import * as Styled from './searchBar.styled.js';

export default function SearchBar() {
  const [searchKey, setSearchKey] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchMovies = async (e: FormEvent) => {
    e.preventDefault();
    const searchedMovies = await fetchMovies(searchKey);
    if (searchedMovies) {
      dispatch(setSearchMovies(searchedMovies));
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

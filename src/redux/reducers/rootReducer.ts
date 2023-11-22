import { combineReducers } from '@reduxjs/toolkit';
import { moviesReducer } from './moviesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;

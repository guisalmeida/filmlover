import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from './moviesReducer'

export const rootReducer = combineReducers({
  movies: moviesReducer
})
import { configureStore } from '@reduxjs/toolkit';
import { combineReducer } from './combineReduser';

export const store = configureStore({
  reducer: combineReducer,
});

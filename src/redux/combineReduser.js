import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterReducer';

export const combineReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

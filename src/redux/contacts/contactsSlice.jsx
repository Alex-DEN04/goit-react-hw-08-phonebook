import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: contactInitialState,
  extraReducers: builder =>
    builder
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(addContact.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    })
    .addCase (addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(deleteContact.pending,(state) => {
      state.isLoading = true;
    })
    .addCase (deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload);
    })
    .addCase (deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
});
export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getContactsError = state => state.contacts.error;
export const getFilter = state => state.filter;
export const getUser = state => state.auth.user;
export const getEmail = state => state.auth.user.email;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsRefreshing = state => state.auth.isRefreshing;
export const getToken = state => state.auth.token;

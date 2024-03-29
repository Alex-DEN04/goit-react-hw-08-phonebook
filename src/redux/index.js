export {
  register,
  login,
  logout,
  fetchCurrentUser,
} from './auth/authOperation';
export {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts/contactsOperations';
export { setFilter } from './filter/filterActions';
export {
  getContacts,
  getIsLoading,
  getContactsError,
  getFilter,
  getUser,
  getEmail,
  getIsLoggedIn,
  getIsRefreshing,
  getToken,
} from './selectors';

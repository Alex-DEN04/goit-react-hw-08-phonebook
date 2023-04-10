import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsLoggedIn, getIsRefreshing } from 'redux/selectors';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  return !isLoggedIn && !isRefreshing ? (
    <Navigate to={redirectTo} />
  ) : (
    component
  );
};

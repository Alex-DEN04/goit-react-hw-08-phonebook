import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Contacts } from '../../pages/Contacts/Contacts';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { SharedLayoud } from 'components/SharedLayoud/SharedLayoud';
import { fetchCurrentUser } from 'redux/auth/authOperation';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { getIsRefreshing } from 'redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayoud />}>
            <Route index element={<Home />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      </>
    )
  );
}

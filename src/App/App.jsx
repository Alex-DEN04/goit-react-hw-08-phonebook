import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Contacts } from '../pages/Contacts/Contacts';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Home } from 'pages/Home/Home';
import { SharedLayoud } from 'components/SharedLayoud/SharedLayoud';
import { fetchCurrentUser } from 'redux/auth/authOperation';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayoud />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

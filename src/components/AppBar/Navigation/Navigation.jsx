import React from 'react';
import { NavMenu } from './NavigationStyled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavMenu to="/" end>
        Home
      </NavMenu>
      {isLoggedIn && <NavMenu to="contacts">Contacts</NavMenu>}
    </nav>
  );
};

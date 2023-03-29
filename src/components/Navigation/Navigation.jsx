import React from 'react';
import { NavMenu } from './NavigationStyled';

export const Navigation = () => {
  return (
    <nav>
      <NavMenu to="/" end>
        Home
      </NavMenu>
      <NavMenu to="contacts">Contacts</NavMenu>
    </nav>
  );
};

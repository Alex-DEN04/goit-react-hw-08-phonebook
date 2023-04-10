import React from 'react';

import { AuthNav } from 'components/AppBar/AuthNav/AuthNav';
import { UserMenu } from 'components/AppBar/UserMenu/UserMenu';
import { Navigation } from 'components/AppBar/Navigation/Navigation';
import { Box } from 'components/Box';
import { getIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Box
      display="flex"
      alignItems="center"
      p="4px"
      m="0px"
      justifyContent="space-between"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};

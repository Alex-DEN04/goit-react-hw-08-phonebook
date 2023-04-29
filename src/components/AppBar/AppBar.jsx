import { Box } from 'components/Box';
import { useSelector } from 'react-redux';

import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { Navigation } from './Navigation/Navigation';
import { getIsLoggedIn } from 'redux/index';

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

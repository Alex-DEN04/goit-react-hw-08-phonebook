import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { Navigation } from './Navigation/Navigation';
import { getIsLoggedIn } from 'redux/index';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      m={0}
      mb={2}
      borderBottom="2px"
      borderColor="gray.100"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};

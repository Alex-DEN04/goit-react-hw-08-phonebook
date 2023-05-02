import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Link as ReachLink } from '@reach/router';

export const AuthNav = () => {
  return (
    <Flex gap={3} fontSize="lg" fontWeight="bold">
      <Link as={ReachLink} to="register">
        Register
      </Link>
      <Link as={ReachLink} to="login">
        Login
      </Link>
    </Flex>
  );
};

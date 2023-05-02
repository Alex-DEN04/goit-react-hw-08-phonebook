import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/index';
import { Link } from 'react-router-dom';
import { Link as ReachLink } from '@reach/router';
import { Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Flex as="nav" gap={3} fontSize="lg" fontWeight="bold">
      <Link as={ReachLink} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link as={ReachLink} to="contacts">
          Contacts
        </Link>
      )}
    </Flex>
  );
};

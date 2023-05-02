import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { logout } from 'redux/index';
import { getEmail } from 'redux/index';

export const UserMenu = () => {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();
  return (
    <Flex m="0px" p="0px" align="center" gap={4}>
      <Avatar w={8} h={8} src="https://bit.ly/kent-c-dodds" />
      <Text>{email}</Text>
      <Button
        leftIcon={<ExternalLinkIcon />}
        bg="teal.400"
        color="white"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </Flex>
  );
};

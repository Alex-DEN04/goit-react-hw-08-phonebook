import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Flex,
  Avatar,
  Box,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { deleteContact } from 'redux/index';

export const Contact = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <Card
      align="center"
      bg="white"
      p={5}
      borderTop="4px"
      borderColor="teal.400"
    >
      <CardHeader p={0} pb={3}>
        <Flex align="center" gap={3}>
          <Box>
            <Avatar w={6} h={6} />
          </Box>
          <Box>
            <Heading as="h3" size="sm">
              {name}
            </Heading>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody p={0} pb={3}>
        <Text>{number}</Text>
      </CardBody>
      <CardFooter p={0} pb={3}>
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="teal"
          variant="outline"
          size="sm"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

Contact.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};

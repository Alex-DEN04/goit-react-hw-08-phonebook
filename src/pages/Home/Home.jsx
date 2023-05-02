import { Flex, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex justify="center" p={15}>
      <Text
        as="h1"
        fontFamily="heading"
        fontSize="2xl"
        fontWeight="bold"
        justifyContent="center"
      >
        Welcome
      </Text>
    </Flex>
  );
}

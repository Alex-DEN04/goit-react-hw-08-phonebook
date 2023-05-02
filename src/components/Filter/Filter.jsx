import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/index';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FormControl p={4} maxW={350}>
      <FormLabel htmlFor="" fontSize="lg" fontWeight="bold">
        Find contacts by name
      </FormLabel>
      <Input
        borderColor="teal.300"
        mb={4}
        type="text"
        placeholder="Martin Holst"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </FormControl>
  );
};

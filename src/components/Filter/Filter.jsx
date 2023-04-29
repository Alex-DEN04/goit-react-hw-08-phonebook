import { Box } from 'components/Box';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/index';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Box ml={5} gap={3}>
      <Label htmlFor="">Find contacts by name</Label>
      <Input type="text" onChange={e => dispatch(setFilter(e.target.value))} />
    </Box>
  );
};

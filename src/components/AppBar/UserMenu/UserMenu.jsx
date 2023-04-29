import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'components/Box';

import { logout } from 'redux/index';
import { getEmail } from 'redux/index';
import { Button, Email } from './UserMenuStyled';

export const UserMenu = () => {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();
  return (
    <Box display="flex" m="0px" p="0px">
      <Email>{email}</Email>
      <Button onClick={() => dispatch(logout())}>logout</Button>
    </Box>
  );
};

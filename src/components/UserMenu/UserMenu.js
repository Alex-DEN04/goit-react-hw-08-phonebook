import { useSelector, useDispatch } from 'react-redux';

import { Box } from 'components/Box';
import { logout } from 'redux/auth/authOperation';
import { getEmail } from 'redux/selectors';
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

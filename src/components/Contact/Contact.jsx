import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';
import { Button } from './Contact.styled';

export const Contact = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      {item.name}: {item.number}
      <Button type="button" onClick={() => dispatch(deleteContact(item.id))}>
        Delete
      </Button>
    </>
  );
};

Contact.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/index';
import { Button } from './Contact.styled';

export const Contact = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <span>Delete</span>
      </Button>
    </>
  );
};

Contact.propTypes = {
  item: PropTypes.objectOf(PropTypes.string),
};

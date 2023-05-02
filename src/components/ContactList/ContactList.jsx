import { Box, SimpleGrid } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/index';
import { Contact } from '../Contact/Contact';
import { getContacts, getFilter } from 'redux/index';
import { Loader } from 'components/Loader/Loader';
import { getIsLoading } from 'redux/index';

export const ContactList = () => {
  const items = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);

  const getFilterContacts = () => {
    if (!filter) {
      return items;
    }
    const filteredContacts = items.filter(item => {
      const normolizedFilter = filter.toLowerCase();
      const normalizedName = item.name.toLowerCase();
      const result = normalizedName.includes(normolizedFilter);
      return result;
    });
    return filteredContacts;
  };
  const contacts = getFilterContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <SimpleGrid as="ul" columns={4} spacing={5} minChildWidth={200}>
      {loading && <Loader />}
      {items &&
        contacts.map(contact => (
          <Box as="li" listStyleType="none" key={contact.id}>
            <Contact item={contact}></Contact>
          </Box>
        ))}
    </SimpleGrid>
  );
};

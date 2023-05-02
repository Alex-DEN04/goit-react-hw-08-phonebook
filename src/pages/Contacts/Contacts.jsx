import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Contacts() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan="1" p={4} minHeight="100vh" bg="teal.400">
        <ContactForm />
      </GridItem>
      <GridItem colSpan="3" p={5}>
        <Filter />
        <ContactList />
      </GridItem>
    </Grid>
  );
}

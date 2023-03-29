import { ContactList } from '../../components/ContactList/ContactList';
import { Title } from '../../components/Title/Title';
import { ContactForm } from '../../components/Phonebook/Phonebook';
import { Filter } from '../../components/Filter/Filter';

import React from 'react';

export const Contacts = () => {
  return (
    <>
      <Title title={'Phonebook'}></Title>
      <ContactForm></ContactForm>
      <Title title={'Contacts'}></Title>
      <Filter></Filter>
      <ContactList></ContactList>
    </>
  );
};

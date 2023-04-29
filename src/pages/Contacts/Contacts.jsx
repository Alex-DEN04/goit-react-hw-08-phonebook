import { ContactList } from 'components/ContactList/ContactList';
import { Title } from 'components/Title/Title';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <>
      <Title title={'Phonebook'}/>
      <ContactForm/>
      <Title title={'Contacts'}/>
      <Filter/>
      <ContactList/>
    </>
  );
}

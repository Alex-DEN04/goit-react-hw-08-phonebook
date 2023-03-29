import React from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from '../../redux/contacts/operations';

import {
  FormStyled,
  Input,
  ErrorMessageStyled,
  ErrorText,
  Label,
  Button,
} from './Phonebook.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessageStyled
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().min(4).max(10).required(),
});

export const ContactForm = () => {
  const items = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    actions.resetForm();
    for (const item of items) {
      if (item.name.toLowerCase() === values.name.toLowerCase()) {
        return alert(`${values.name} is already in contacts`);
      }
    }
    dispatch(addContact(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label>Name</Label>
        <Input type="text" name="name" />
        <FormError name="name" />

        <Label>Number</Label>
        <Input type="tel" name="number" />
        <FormError name="number" />
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

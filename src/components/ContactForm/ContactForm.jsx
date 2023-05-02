import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { Form, Field } from 'formik';

import { getContacts } from 'redux/index';
import { addContact } from 'redux/index';

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

  const toast = useToast();
  const showToast = value => {
    toast({
      title: 'Warning',
      description: `${value} is already in contacts`,
      duration: 5000,
      isClosable: true,
      status: 'warning',
      position: 'top',
      variant: 'top-accent',
    });
  };

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    actions.resetForm();

    const existsName = items.some(
      ({ name }) =>
        name.toLowerCase().trim() === values.name.toLowerCase().trim()
    );
    if (existsName) {
      return showToast(values.name);
    }
    dispatch(addContact(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Flex flexDirection="column" justify="center" align="center">
            <Field name="name" validate={validationSchema}>
              {({ field, form }) => (
                <FormControl
                  mb={2}
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <FormLabel htmlFor="name" fontSize="md" fontWeight="normal">
                    Name
                  </FormLabel>
                  <Input
                    {...field}
                    bg="withe"
                    name="name"
                    type="text"
                    placeholder="Martin Holst"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="number" validate={validationSchema}>
              {({ field, form }) => (
                <FormControl
                  mb={6}
                  isInvalid={form.errors.number && form.touched.number}
                >
                  <FormLabel htmlFor="tel" fontSize="md" fontWeight="normal">
                    Number
                  </FormLabel>
                  <Input {...field} bg="withe" name="number" type="tel" />
                  <FormErrorMessage>{form.errors.number}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              leftIcon={<EditIcon />}
              bg="white"
              color="teal.400"
              type="submit"
            >
              Add contact
            </Button>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

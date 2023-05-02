import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

import { register } from 'redux/index';

const initialValues = {
  id: '',
  name: '',
  email: '',
  password: '',
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
});

export default function Register() {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Box as="section" p={3} maxW={450}>
            <Form>
              <Field name="name" validate={validationSchema}>
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor="name" fontSize="lg" fontWeight="medium">
                      Name
                    </FormLabel>
                    <Input
                      {...field}
                      borderColor="teal.300"
                      mb={4}
                      name="name"
                      type="name"
                      placeholder="John Wick"
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email" validate={validationSchema}>
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel
                      htmlFor="email"
                      fontSize="lg"
                      fontWeight="medium"
                    >
                      Email
                    </FormLabel>
                    <Input
                      {...field}
                      borderColor="teal.300"
                      mb={4}
                      name="email"
                      type="email"
                      placeholder="johnwick@gmail.com"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password" validate={validationSchema}>
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel
                      htmlFor="password"
                      fontSize="lg"
                      fontWeight="medium"
                    >
                      Password
                    </FormLabel>
                    <Input
                      {...field}
                      borderColor="teal.300"
                      mb={4}
                      name="password"
                      type="password"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </>
  );
}

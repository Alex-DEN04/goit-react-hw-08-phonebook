import { Formik, Form, Field } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { login } from 'redux/index';

const initialValues = {
  email: '',
  password: '',
};
const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Box as="section" p={3} maxW={450}>
          <Form>
            <Field name="email" validate={validationSchema}>
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email" fontSize="lg" fontWeight="medium">
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
  );
}

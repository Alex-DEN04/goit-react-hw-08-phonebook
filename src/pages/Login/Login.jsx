import { Formik, Form, Field } from 'formik';
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
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" placeholder="johnwick@gmail.com" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

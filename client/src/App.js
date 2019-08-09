import React from 'react';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class App extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          username: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema= {Yup.object().shape({
          firstName: Yup.string()
            .required('We need your name, por favor'),
          lastName: Yup.string()
            .required('We need your last name, too'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          username: Yup.string()
            .required('Username required'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password')
        })}
        onSubmit={ fields=> {
          alert('Nice to see you!\n' + JSON.stringify(fields, null, 4))
        }}
        
    )
  }
}
export default App;

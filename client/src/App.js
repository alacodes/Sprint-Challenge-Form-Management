import React, {Component} from 'react';
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
        render = {({ errors, status, touched }) => (
          <FormikForm>
            <div className = 'form-group'>
              <label htmlFor='firstName'>First Name</label>
              <Field name='firstName' type='text' className={'form-control' +(errors.firstName && touched.firstName ? ' is-invalid' : '')} />
              <ErrorMessage name='firstName' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
              <label htmlFor='lastName'>Last Name</label>
              <Field name='lastName' type='text' className={'form-control' +(errors.lastName && touched.lastName ? ' is-invalid' : '')} />
              <ErrorMessage name='lastName' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
              <label htmlFor='username'>Username</label>
              <Field name='username' type='text' className={'form-control' +(errors.username && touched.username ? ' is-invalid' : '')} />
              <ErrorMessage name='username' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
              <label htmlFor='email'>Email</label>
              <Field name='email' type='text' className={'form-control' +(errors.email && touched.email ? ' is-invalid' : '')} />
              <ErrorMessage name='email' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
              <label htmlFor='password'>Password</label>
              <Field name='password' type='password' className={'form-control' +(errors.password && touched.password ? ' is-invalid' : '')} />
              <ErrorMessage name='password' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <Field name='confirmPassword' type='password' className={'form-control' +(errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
              <ErrorMessage name='confirmPassword' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
              <button type='submit' className='btn-primary'>Register/Sign-in</button>
              <button type='reset' className='btn-reset'>Reset</button>
            </div>

          </FormikForm>
        )}
      />
    )
  }
}

  

export default App;

import React from 'react';
import { Field, Form, ErrorMessage, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

class RegForm extends React.Component {

    constructor() {
      super();
      this.state= {}
    }
    render() {
      return (
        <Form>
            <div className = 'form-group'>
                <label htmlFor='firstName'>First Name</label>
                <Field name='firstName' type='text' className={'form-control' +(this.props.errors.firstName && this.props.touched.firstName ? ' is-invalid' : '')} />
                <ErrorMessage name='firstName' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <Field name='lastName' type='text' className={'form-control' +(this.props.errors.lastName && this.props.touched.lastName ? ' is-invalid' : '')} />
                <ErrorMessage name='lastName' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
                <label htmlFor='username'>Username</label>
                <Field name='username' type='text' className={'form-control' +(this.props.errors.username && this.props.touched.username ? ' is-invalid' : '')} />
                <ErrorMessage name='username' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
                <label htmlFor='email'>Email</label>
                <Field name='email' type='text' className={'form-control' +(this.props.errors.email && this.props.touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name='email' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
                <label htmlFor='password'>Password</label>
                <Field name='password' type='password' className={'form-control' +(this.props.errors.password && this.props.touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name='password' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <Field name='confirmPassword' type='password' className={'form-control' +(this.props.errors.confirmPassword && this.props.touched.confirmPassword ? ' is-invalid' : '')} />
                <ErrorMessage name='confirmPassword' component='div' className='invalid-feedback' />
            </div>
            <div className = 'form-group'>
                <button type='submit' className='btn-primary'>Register/Sign-in</button>
                <button type='reset' className='btn-reset'>Reset</button>
            </div>
        </Form>
      )
    }
}

const FormikForm = withFormik({
    mapPropsToValues({firstName, lastName, username, password}) {
        return{
            firstName:firstName || '',
            lastName: lastName || '',
            username: username || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
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
    }),
    handleSubmit(values) {
        console.log(values)
        axios
            .post('http://localhost:5000/api/register', values)
            .then(results => {
                console.log(results.data);
                this.setState(results.data);
            })
            .catch(error => {
                console.log("Check yourself" + error)
            });
    }
})(RegForm);



export default FormikForm;
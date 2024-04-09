import React, { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Signup() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await axios.post('/signup', values);

            if (response.data.exists && !response.data.message.includes('incorrect')) {
                resetForm();

            } else {
                setErrorMessage('Error signing up. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Error signing up. Email not .');
        }
        // alert("Signup Successful");

        // navigate('/home'); 

        setSubmitting(false);
    };


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt="Amazon Logo"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-up</h1>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <p>Enter an Email</p>
                            <Field type='email' name='email' />
                            <ErrorMessage name='email' component='div' className='error' />

                            <p>Enter a Password</p>
                            <Field type='password' name='password' />
                            <ErrorMessage name='password' component='div' className='error' />

                            <button type='submit' className='login__signInButton' disabled={isSubmitting}>
                                Sign Up
                            </button>
                        </Form>
                    )}
                </Formik>

                <p></p>

                <Link to='/forgot-password' className='forgot-password'>Forgot Password?</Link>

                <p></p>

                <Link to='/register' className='login__registerButton'>Create your Amazon Account</Link>

                {errorMessage && <div className='error'>{errorMessage}</div>} {/* Display error message if signup fails */}
            </div>
        </div>
    )
}

export default Signup;

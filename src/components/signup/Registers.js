import React, { useState } from 'react';
import './signup.css';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

function Register() {
    const [responseMessage, setResponseMessage] = useState('');

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        password: Yup.string().required('Password is required')
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await axios.post('/register', values);
            console.log(response.data);
            setResponseMessage("Registration successful");
            resetForm();
        } catch (error) {
            console.error('Error:', error);
            if (error.response) {
                const { data } = error.response;
                if (data && data.message) {
                    setResponseMessage(data.message);
                }
            } else {
                setResponseMessage('An unexpected error occurred. Please try again later.');
            }

        }

        setSubmitting(false);
    };

    return (
        <div className='register'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt="Amazon Logo"
                />
            </Link>

            <div className='register__container'>
                <h1>Create Account</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Your name</label>
                                <Field type='text' name='name' className="form-control" />
                                <ErrorMessage name='name' component='div' className='error' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field type='email' name='email' className="form-control" />
                                <ErrorMessage name='email'>
                                    {msg => <div className="error">{msg}</div>}
                                </ErrorMessage>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber">Mobile Number</label>
                                <Field type='text' name='phoneNumber' className="form-control" />
                                <ErrorMessage name='phoneNumber' component='div' className='error' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field type='password' name='password' className="form-control" />
                                <ErrorMessage name='password' component='div' className='error' />
                            </div>

                            <button type='submit' className='register__signInButton' disabled={isSubmitting}>Submit</button>
                            {responseMessage && <div className={responseMessage.includes('successful') ? 'success' : 'error'}>{responseMessage}</div>}
                        </Form>
                    )}
                </Formik>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <Link to='/signup' className='register__registerButton'>Already have an account?</Link>
            </div>
        </div>
    )
}

export default Register;










// import React, { useState } from 'react';
// import './signup.css';
// import { Link } from "react-router-dom";
// import { Form, Button } from 'react-bootstrap';
// import axios from "axios"

// function Register() {
    
//     const [name, setName] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [verificationCode, setVerificationCode] = useState('');
//     const [isVerified, setIsVerified] = useState(false);

//     // Function to handle submission of phone number and verification code
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here, you can implement logic to send the verification code and verify the number
//         // For simplicity, I'll just set isVerified to true
//         setIsVerified(true);
//         const userData = {
//             name,
//             phoneNumber,
//             verificationCode,
//             password
//         };
    
//         try {
//             // Send user registration data to the API endpoint
//             const response = axios.post('/api/register', userData);
//             console.log(response.data); // Log the response from the server
//             // Handle success, for example, redirect to another page
//         } catch (error) {
//             console.error('Error:', error); // Log any errors
//             // Handle error, show an error message to the user, etc.
//         }
//     };

//     return (
//         <div className='register'>
//             <Link to='/'>
//                 <img
//                     className="login__logo"
//                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
//                 />
//             </Link>

//             <div className='register__container'>
//                 <h1>Create Account</h1>

//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group>
//                         <Form.Label>Your name</Form.Label>
//                         <Form.Control type='text' value={name} onChange={e => setName(e.target.value)} />
//                     </Form.Group>

//                     <Form.Group>
//                         <Form.Label>Mobile Number</Form.Label>
//                         <div className="mobile__input">
//                             <Form.Control type='text' placeholder='+Country Code' className="country_code" />
//                             <Form.Control type='text' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
//                         </div>
//                     </Form.Group>

//                     {isVerified ? (
//                         <Form.Group>
//                             <Form.Label>Verification Code</Form.Label>
//                             <Form.Control type='text' value={verificationCode} onChange={e => setVerificationCode(e.target.value)} />
//                         </Form.Group>
//                     ) : null}

//                     {!isVerified && (
//                         <Button type='submit' className='register__verifyButton'>Verify</Button>
//                     )}

//                     {isVerified && (
//                         <Button type='submit' className='register__signInButton'>Submit</Button>
//                     )}
//                 </Form>

//                 <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

//                 <Link to='/signup' className='register__registerButton'>Already have an account?</Link>
//             </div>
//         </div>
//     )
// }

// export default Register;

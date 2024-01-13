import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Add from "../../assets/images/addAvatar.png";
import {Alert, CircularProgress} from "@mui/material";

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        const email = values.email
        const password = values.password

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (err) {
            setErr(true);
        }
    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Omit Chat</span>
                <span className="title">Login</span>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validate={values => {
                        const error = {}
                        if (!values.email) {
                            error.email = 'email is required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                            error.email = 'email is invalid';
                        }
                        if (!values.password) {
                            error.password = 'password is required';
                        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i.test(values.password)) {
                            error.password =
                                'password must have one letter and one number and have at least 6 characters';
                        }
                        return error;
                    }}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <Field type="email" placeholder="email" name="email"/>
                            <ErrorMessage className="errorMessage" name="email" component="div"/>
                            <Field type="password" placeholder="password" name="password"/>
                            <ErrorMessage className="errorMessage" name="password" component="div"/>
                            <button type="submit" disabled={isSubmitting}>
                                { isSubmitting ? <CircularProgress /> : "Sign in"}
                            </button>
                            { err && <Alert severity="error">Error communicating with the server</Alert>}
                        </Form>
                    )}
                </Formik>
                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
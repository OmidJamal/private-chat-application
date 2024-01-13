import React, {useState} from "react";
import Add from "../../assets/images/addAvatar.png";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db, storage} from "../../firebase";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {doc, setDoc} from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Alert, CircularProgress} from "@mui/material";

const Register = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const [avatar,setAvatar] = useState("")
    const [changeAvatar, setChangeAvater] = useState(false);
    const [fileValue,setFileValue] = useState(null)
    const handleFileChange = (e)=>{
        const file = e.target.files[0];

        if (file){
            const reader = new FileReader()
            setFileValue(file)
            reader.onloadend = () => {
                setAvatar(reader.result)
            };
            reader.readAsDataURL(file)
            setChangeAvater(true);
        } else {
            setChangeAvater(false)
            setFileValue("")
        }
    }
    const handleSubmit = async (values) => {

        const displayName = values.displayName
        const email = values.email
        const password = values.password
        const file = fileValue

        console.log(file)

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            //Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/")
                        setErr(false)
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    };

    return (
            <div className="formContainer">
                <div className="formWrapper">
                    <span className="logo">Omit Chat</span>
                    <span className="title">Register</span>
                    <Formik
                        initialValues={{
                            displayName: "",
                            email: "",
                            password: "",
                            file: ""
                        }}
                        validate={values => {
                            const error = {}
                            if (!values.displayName) {
                                error.displayName = "username is required";
                            }
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
                                <Field type="text" placeholder="username" name="displayName"/>
                                <ErrorMessage className="errorMessage" name="displayName" component="div"/>
                                <Field type="email" placeholder="email" name="email"/>
                                <ErrorMessage className="errorMessage" name="email" component="div"/>
                                <Field type="password" placeholder="password" name="password"/>
                                <ErrorMessage className="errorMessage" name="password" component="div"/>
                                <Field style={{display: "none"}} type="file" placeholder="file" name="file" id="file" onChange={handleFileChange}/>
                                <label htmlFor="file">
                                    <img style={{width: "40px",height: "40px",borderRadius: "50%"}} src={changeAvatar ? avatar : Add} alt=""/>
                                    <span>Add an avatar</span>
                                </label>
                                <button type="submit" disabled={isSubmitting}>
                                    { isSubmitting ? <CircularProgress /> : "Sign up"}
                                </button>
                                { err && <Alert severity="error">Error communicating with the server</Alert>}
                            </Form>
                        )}
                    </Formik>
                    <p>
                        You do have an account?<Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
            );
            };

export default Register;
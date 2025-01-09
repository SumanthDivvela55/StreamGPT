import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateForm } from '../utils/validate.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm]=useState(true);
    const [errorMessage, setErrorMessage]=useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const message = validateForm(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        // signUp
        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const {uid, email, displayName} = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))

                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage(error);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                });
        }else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    }

    const handleButtonClick = () =>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg" alt="background-img" />
            </div>
            <form onSubmit={handleSubmit}  className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
                <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={handleButtonClick}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In Now"}
                </p>
            </form>
        </div>
    )
}

export default Login

import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { Form } from './Form'
import {setUser} from "../store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Header from './Header'

const Login = () => {
    const dispatch = useDispatch();
    const navigate  = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                  email: user.email,
                  id: user.uid,
                  token: user.accessToken,
                }));
                navigate("/home");
            })
            .catch(() => alert("invalid user!"));
            

    }
  return (
    <Form
        title="Войти"
        handleClick={handleLogin}
    />
  )
}

export  {Login}
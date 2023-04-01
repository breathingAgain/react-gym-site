import { useDispatch } from 'react-redux'
import { Form } from './Form'
import setUser from "../store/slices/userSlice"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React from 'react';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            }));
            navigate("/");
        })
            .catch(console.error)
    }
  return (
    <Form
        title="Зарегистрироваться"
        handleClick={handleRegister}
    />
  )
}

export {SignUp}
import { SignUp } from '../Components/SignUp'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RegisterPage extends Component {
  render() {
    return (
      <>
     <h1 class="display-2" style={{textAlign: "center"}}>Регистрация</h1>
      <div className='register'>
      <SignUp/>
      </div>
      <h1 class="display-6" style={{textAlign: "center"}}>
        Уже есть аккаунт? <Link to="/">Войти</Link>
      </h1>
      </>
    )
  }
}

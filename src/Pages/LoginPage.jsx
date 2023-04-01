import { Login } from "../Components/Login"
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginPage extends Component {
  render() {
    return (
      <>
      <h1 class="display-2" style={{textAlign: "center"}}>Войти</h1>
      <div className='register'>
      <Login/>
      </div>
      <h1 class="display-6" style={{textAlign: "center"}}>
        Или <Link to="/register">Зарегистрируйтесь</Link>
      </h1>
      </>
    )
  }
}

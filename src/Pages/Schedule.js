import React, { Component } from 'react'
import Tolyan from "../assets/Толян.jpg"
import Yasya from "../assets/Яся.jpg"
import Max from "../assets/Яся.jpg"
import { Button, Container, FormControl, Nav, Navbar, Form } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import "./style.css"
import GymInv from '../assets/Гантеля.jpg'
import Home from "../Pages/Home"
import Album from "../Pages/Album"
import { Route, Routes, BrowserRouter as Router  } from 'react-router-dom';
export default class Schedule extends Component {
  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container className='containerHeader'>
        <Navbar.Brand hred="/">
          <img
            src={GymInv}
            height="60"
            width="60"
            className='imgHeader'
          />
        </Navbar.Brand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          <Nav className='me-auto'>
            <Nav.Link href="/home"> <h5>Главная</h5> </Nav.Link>
            <Nav.Link href="/about"> <h5>О нас</h5> </Nav.Link>
            <Nav.Link href="/album"> <h5>Альбом</h5> </Nav.Link>
            <Nav.Link href="/schedule"> <h5>Расписание</h5>  </Nav.Link>
          </Nav>

        </NavbarCollapse>
      </Container>
    </Navbar>

      <div className='sheduleBackground'>
        <div className='gridShedule'>
          <table class="table table-hover table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">День недели</th>
                <th scope="col">Тренировка</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Понедельник</th>
                <td>Грудь, трицепс</td>

              </tr>
              <tr>
                <th scope="row">Вторник</th>
                <td>Отдых</td>

              </tr>
              <tr>
                <th scope="row">Среда</th>
                <td>Спина, бицепс, плечи</td>

              </tr>
              <tr>
                <th scope="row">Четверг</th>
                <td>Отдых</td>

              </tr>
              <tr>
                <th scope="row">Пятница</th>
                <td>Отдых</td>

              </tr>
              <tr>
                <th scope="row">Суббота</th>
                <td>Ноги</td>

              </tr>
              <tr>
                <th scope="row">Воскресенье</th>
                <td>Пиво</td>

              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
      </>
    )
  }
}

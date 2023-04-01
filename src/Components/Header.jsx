import React, { Component } from 'react'
import { Button, Container, FormControl, Nav, Navbar, Form } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import GymInv from '../assets/Гантеля.jpg'
import Home from "../Pages/Home"
import About from "../Pages/About"
import Album from "../Pages/Album"
import Schedule from "../Pages/Schedule"
import Login from "../Pages/LoginPage"
import Register from "../Pages/RegisterPage"
import "./style.css";
import { Provider } from 'react-redux'
import {store} from "../store"

export default class Header extends Component {
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

        <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/album" element={<Album />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/register" element={<Register/>}/>
          </Routes>
          </Provider>
        </Router>

      </>
    )
  }
}

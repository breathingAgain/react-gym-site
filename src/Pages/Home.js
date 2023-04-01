import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import Tolyan from "../assets/Толян.jpg"
import Yasya from "../assets/Яся.jpg"
import Max from "../assets/Яся.jpg"
import { Button, Container, FormControl, Nav, Navbar, Form } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import "./style.css"
import GymInv from '../assets/Гантеля.jpg'
import Album from "../Pages/Album"
import Schedule from "../Pages/Schedule"
import { Route, Routes, BrowserRouter as Router  } from 'react-router-dom';
import { useDispatch } from 'react-redux'

export default class Home extends Component {
  render() {
    return (
      const dispatch = useDispatch();
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
      <CarouselBox></CarouselBox>
      </>
    )
  }
}

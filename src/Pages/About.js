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
import Schedule from "../Pages/Schedule"
import { Route, Routes, BrowserRouter as Router  } from 'react-router-dom';
export default class About extends Component {
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

    
      <div className='aboutBackground'>           
        <div className='gridAbout'>
          <div className='gridProfile'>
            <div className='profileInfo'>
            <img className='profilePhoto' src={Tolyan} />
              <p>Ярослав</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
          <div className='gridProfile'>
            <div className='profileInfo'>
            <img className='profilePhoto' src={Tolyan} />
              <p >Степа</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
          <div className='gridProfile'>
            <div className='profileInfo'>
            <img className='profilePhoto' src={Tolyan} />
              <p >Руська</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
          <div className='gridProfile'>
            <div className='profileInfo'>
              <img className='profilePhoto' src={Tolyan} />
              <p>Толян</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
          <div className='gridProfile'>
            <div className='profileInfo'>
            <img className='profilePhoto' src={Tolyan} />
              <p>Рус</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
          <div className='gridProfile'>
            <div className='profileInfo'>
            <img className='profilePhoto' src={Tolyan} />
              <p>Макс</p>
              <a href="#" class="btn btn-secondary"><span>Узнать больше</span></a>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

import React, { Component } from 'react'
import { Button, Container, FormControl, Nav, Navbar, Form } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import monkey from './monkey.jpg'
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contacts from "../Pages/Contacts"
import Blog from "../Pages/Blog"

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar  fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand hred="/">
              <img
                src={monkey}
                height="60"
                width="60"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className='me-auto'>
                <Nav.Link href="/"> Сюда не нажимать пока </Nav.Link>
                <Nav.Link href="/about"> Сюда не нажимать пока </Nav.Link>
                <Nav.Link href="/contacts"> Сюда не нажимать пока </Nav.Link>
                <Nav.Link href="/blog"> Потом доделаю все  </Nav.Link>
                
              </Nav>
              
            </NavbarCollapse>
          </Container>
        </Navbar>

        <Router>
            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route  path="/about" element={<About/>} />
              <Route  path="/contacts" element={<Contacts/>} />
              <Route  path="/blog" element={<Blog/>} />
            </Routes>
        </Router>

      </>
    )
  }
}

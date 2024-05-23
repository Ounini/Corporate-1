import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

function HeaderWithRoutes() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Corporate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item><NavLink to='/' className='nav-link'>Home</NavLink></Nav.Item>
              <Nav.Item><NavLink to='about' className='nav-link'>About</NavLink></Nav.Item>
              <Nav.Item><NavLink to='/services' className='nav-link'>Services</NavLink></Nav.Item>
              <Nav.Item><NavLink to='/works' className='nav-link'>Works</NavLink></Nav.Item>
              <Nav.Item><NavLink to='teams' className='nav-link'>Teams</NavLink></Nav.Item>
              <Nav.Item><NavLink to='testimonials' className='nav-link'>Testimonials</NavLink></Nav.Item>
              <Nav.Item><NavLink to='/pricing' className='nav-link'>Pricing</NavLink></Nav.Item>
              <Nav.Item><NavLink to='/blog' className='nav-link'>Blog</NavLink></Nav.Item>
              <Nav.Item><NavLink to='/contact' className='nav-link'>Contact</NavLink></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default HeaderWithRoutes

import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Headers = () => {
  const {user,logOut} = useAuth();
    return (
        <>
       <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand href="#home">Doctor's Home</Navbar.Brand>
          <Navbar.Toggle />
           <Navbar.Collapse className="justify-content-end">
           
           <Navbar.Text>
           Signed in as: <a href="#login">{user?.displayName}</a>
           </Navbar.Text>
          </Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/home#home">Home</Nav.Link>
            <Nav.Link href="/home#services">Services</Nav.Link>
            <Nav.Link href="/home#experts">Our Specialist</Nav.Link>
            {user?.email ?
              
              <Button onClick={logOut} variant="primary">Log Out</Button>:
              <Nav.Link as={Link} to="/login">Login</Nav.Link>}
          </Nav>
          </Container>
        </Navbar>

        
      </>
    );
};

export default Headers;
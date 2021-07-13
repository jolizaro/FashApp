import React from 'react'
import { Navbar, Nav, Button, Form, FormControl, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin; 

  const logout = () => {
    localStorage.removeItem("userInfo");
    dispatch({type: 'USER_LOGOUT'});
  }
  return (
    <header>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
      
      <LinkContainer to="/">
        <Navbar.Brand>FashApp</Navbar.Brand>
      </LinkContainer>
      <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
   
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          {userInfo && <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>}
          {userInfo ? (
            <LinkContainer to="/">
              <button className="logout-btn" onClick={logout}>Logout</button>
            </LinkContainer>

          ) : (
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          )}
          
        </Nav>
     
      </Navbar.Collapse>
      </div>
    </Container>
    </Navbar>
    </header>
  )
}

export default Header

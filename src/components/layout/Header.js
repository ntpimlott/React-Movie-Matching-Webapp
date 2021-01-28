import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import SignOut from '../Login/SignOut';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({setloginToken}) => {
    
    return (
        <header>
            <Container>
            <Navbar  bg="light" expand="sm">
                <Navbar.Brand>Movinder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="nav-item" as={Link} to="/">Movies</Nav.Link>
                    <Nav.Link className="nav-item" as={Link} to="/mylist">My List</Nav.Link>
                    <Nav.Link className="nav-item" as={Link} to="/friends">Friends</Nav.Link>
                    <Nav.Link className="nav-item" as={SignOut} setloginToken={setloginToken}/>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </header>
    )
}

export default Header

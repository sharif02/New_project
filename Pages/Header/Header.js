import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import './Header.css'

const Menu = () => {
    const { user, logOut } = UseAuth();



    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" Navbar sticky="top">
                <Container>
                    <Navbar.Brand href="/home" sticky="top">Health Care</Navbar.Brand>
                    <Navbar.Toggle sticky="top" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-link" sticky="top">
                            <Link to="/home">Home</Link>
                            <Link to="/service">Service</Link>
                            <Link to="/about">About</Link>
                            <Link to="/contact">Conatct</Link>
                            {user?.email ?
                                <Link onClick={logOut} variant="light">Logout</Link> :
                                <Link as={Link} to="/login">Login</Link>}
                            <Navbar.Text>
                                <Link to="">{user?.displayName}</Link>
                            </Navbar.Text>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;
import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from './../../assets/images/logo.svg'

const Header: FC = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="xs">
            <Container>
                <Navbar.Brand className="me-auto" href="/">
                    <img src={logo} width="64" alt="The Rick and Morty" className="me-3 d-inline-block"/>The Rick and
                    Morty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse className=" justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}
                                 to="/character">Characters</NavLink>
                        <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link')}
                                 to="/location">Location</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
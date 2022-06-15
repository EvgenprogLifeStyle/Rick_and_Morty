import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const Header: FC = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand className="me-auto" href="/">The Rick and Morty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse className=" justify-content-end" id="basic-navbar-nav">
                    <Nav>


                        <NavLink  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/character">Characters</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/location">Location</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
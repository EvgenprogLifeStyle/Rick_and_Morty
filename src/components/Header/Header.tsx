import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Nav, Navbar} from "react-bootstrap";


export interface PropsNavbar {
    href: string;
    children: React.ReactNode;
}

const Header: FC = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand className="me-auto" href="/">The Rick and Morty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse  className=" justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        {/*<Nav.Link> Home </Nav.Link>*/}
                        <Nav.Link>Characters</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
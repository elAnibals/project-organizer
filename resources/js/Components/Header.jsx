import React from "react";
import profile from "../Assets/profile.png"

import "../../css/Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, NavDropdown} from "react-bootstrap";





const Header = (props) =>{
    return(
        <Navbar collapseOnSelect bg="dark" variant="dark">
            <Container fluid>
                    <NavDropdown title={<img src={profile}/>} id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.2">Ajustes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.3">Cerrar Sesion</NavDropdown.Item>
                    </NavDropdown>
            </Container>
        </Navbar>
    );
}

export default Header;
import React from "react";
import profile from "../Assets/profile.png"

import "../../css/Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { Link } from "@inertiajs/inertia-react";





const Header = (props) =>{
    return(
        <Navbar collapseOnSelect bg="dark" variant="dark">
            <Container fluid>
                    <Button 
                        variant="outline-primary"
                        href="/dashboard"
                    >
                        <i class="bi bi-house-door-fill"></i>
                    </Button>
                    <h2 style={{color:"white"}}>
                        {props.name}
                    </h2>
                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="underline text-sm text-red-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <h4><i className="bi bi-box-arrow-in-left" ></i></h4>
                    </Link>
            </Container>
        </Navbar>
    );
}

export default Header;
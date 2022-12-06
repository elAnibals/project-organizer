import React from "react";
import "../../css/Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Form, Button } from "react-bootstrap";


import { Head, Link, useForm } from '@inertiajs/inertia-react';

const {useState, useEffect} = React;




function Login(){
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });
    


    useEffect(()=>{
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('home'));;
    }



    return(
        <div className="container py-5 h-100 text-center">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <Card className="login">
                        <Card.Body>
                            <h2>Login</h2>
                            <Card.Text>Porfa ingresa tu correo y contraseña :)</Card.Text>


                            <Form onSubmit={submit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control 
                                        type="email" 
                                        name="email" 
                                        placeholder="Enter email" 
                                        onChange={(e) => setData("email", e.target.value)
}
                                        value={data.email}
                                        
                                    />
                                </Form.Group>
                                <p></p>
                                <Form.Group>
                                    <Form.Control 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password" 
                                        value={data.password}
                                        onChange={(e) => setData("password", e.target.value)}
                                    />
                                </Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit" > Iniciar sesion </Button>
                            </Form>
                            <Card.Text>¿No tienes una cuenta? :( <a href="google.com">Registrarse</a></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Login;
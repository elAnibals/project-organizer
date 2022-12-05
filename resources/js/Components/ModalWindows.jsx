import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Modal, Button, ListGroup, Form, Row, Col } from "react-bootstrap";
import Member from "./Member";

const {useState,useEffect} = React;



export const MemebersModal = (props) =>{
    const [addingMember, setAddingMember] = useState(false);

    const changeToTrue = () =>{
        setAddingMember(true);
    }

    const changeToFalse = () =>{
        setAddingMember(false);
    }

    const addMember = () =>{
        setAddingMember(false);
    }

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    { addingMember ?
                    <div>Agregar Miembro</div>
                    :
                    <div>Miembros</div>
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { addingMember ?
                <Form>
                    <Row>
                    <Col>
                        <Form.Control type="search" placeholder="Nombre" />
                    </Col>
                    <Col>
                        <Form.Select>
                        <option>Scrum Master</option>
                        <option>Product Owner</option>
                        <option>Tester</option>
                        <option>Desarrollador</option>
                        </Form.Select>
                    </Col>
                    </Row>
                </Form>
                :
                <ListGroup as="ul">
                    {props.members.map((member)=>{
                    return (
                    <Member member={member}/>
                    );
                    })} 
                </ListGroup>
                }
            </Modal.Body>
            <Modal.Footer>
                { addingMember ?
                <div>
                <Button
                    variant="outline-danger"
                    onClick={changeToFalse}
                >
                    <i class="bi bi-x"></i>
                </Button>
                &nbsp;
                <Button
                    variant="outline-success"
                    onClick={addMember}
                >
                    <i className="bi bi-check2"></i>
                </Button>
                </div>
                :
                <Button 
                    onClick={changeToTrue}
                >
                    <i class="bi bi-plus-lg"></i>
                </Button>
                }
                
            </Modal.Footer>
        </Modal>
    );
//onhide
}









export const AddSprintModal = (props) =>{
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar Sprint
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder="Nombre del Sprint"></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="outline-danger"
                >
                    <i className="bi bi-x"></i>
                </Button>
                <Button
                    variant="outline-success"
                >
                    <i className="bi bi-check2"></i>
                </Button>
            </Modal.Footer>
            
        </Modal>

    );
}






export const HistoryModal = (props) =>{
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar Sprint
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder="Nombre del Sprint"></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="outline-danger"
                >
                    <i className="bi bi-x"></i>
                </Button>
                <Button
                    variant="outline-success"
                >
                    <i className="bi bi-check2"></i>
                </Button>
            </Modal.Footer>
            
        </Modal>
    );
}
               
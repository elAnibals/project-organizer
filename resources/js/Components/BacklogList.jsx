
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Accordion, Card, Col, ListGroup } from "react-bootstrap";
import Epic from "./Epic";
import { DoneHistory, NormalHistory } from "./Histories";



export const Backlog = (props) =>{
    return(
        <Col>
            <Card>
                <Card.Header>Backlog</Card.Header>
                <Card.Body>
                    <Accordion>
                        {props.epics.map((epic)=>{
                            return (
                                <Epic epic={epic}/>
                            );
                        })}
                    </Accordion>
                </Card.Body>
            </Card>
        </Col>
    );
}


export const StatusTable = (props) =>{

    return(
        <Col>
            <Card>
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                    <ListGroup>
                        {props.histories.map((history)=>{
                            return(
                                <NormalHistory history={history}/>
                            );
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
}

export const DoneTable = (props) =>{
    return (
        <Col>
            <Card>
                <Card.Header>Terminado</Card.Header>
                <Card.Body>
                    <ListGroup>
                        {props.histories.map((history)=>{
                            return(
                                <DoneHistory history={history}/>
                            );
                        })}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
}

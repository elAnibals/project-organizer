import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Container, Accordion, ListGroup, Button } from "react-bootstrap";
import { BacklogHistory } from "./Histories";

const Epic = (props) =>{
    return(
        <Accordion.Item eventKey="0">
            <Accordion.Header>
                {props.epic.name} &nbsp;
            </Accordion.Header>
            <Accordion.Body>
                <ListGroup>
                    {props.epic.histories.map((history)=>{
                        return (
                            <BacklogHistory history ={history}/>
                        );
                    })}
                </ListGroup>
                <p></p>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default Epic;
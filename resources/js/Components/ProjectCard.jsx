import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Card, Button, Container, Badge } from "react-bootstrap";

const ProjectCard = (props) =>{
    console.log(props.project)
    return(
        <div>
            <Container className="text-center">
            <p></p>
            <Card style={{width:"18rem"}}>
                <Card.Body className="text-center">
                    <Card.Title>{props.project.name}</Card.Title>
                    <Button href={"/project/"+props.project.project_id}>
                        Ingresar
                    </Button>
                </Card.Body>
                <Card.Footer>
                    <Badge> {props.project.rol}</Badge>
                </Card.Footer>
            </Card>
        </Container>
        </div>
    );
}

export default ProjectCard;
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button } from "react-bootstrap";
                
const Title = (props) =>{
    return(
        <h2>
            {props.title} &nbsp;&nbsp;&nbsp;
            <Button
                variant = "outline-primary"
                onClick = {props.controlMembers}
            >
                <i className="bi bi-people-fill"></i>
            </Button>
            &nbsp;
            <Button 
                variant="outline-dark"
                href={props.url}
            >
                <i className="bi bi-github"></i>
            </Button>
            &nbsp;
            <Button
                variant = "outline-secondary"
            >
                <i className="bi bi-gear-fill"></i>
            </Button>
        </h2>
    );
}

export default Title;
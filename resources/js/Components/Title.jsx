import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button } from "react-bootstrap";
import { ModifyProjectModal } from "./ModalWindows";



                
const {useState,useEffect} = React;

const Title = (props) =>{

    const [showModify, setShowModify] = useState(false);
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
                variant = "outline-warning"
                onClick={() => setShowModify(true)}
            >
                <i className="bi bi-pencil"></i>
            </Button>
            <ModifyProjectModal
                show={showModify}
                onHide={()=>setShowModify(false)}
            />
        </h2>
    );
}

export default Title;
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Badge, ListGroup } from "react-bootstrap";
import { HistoryModal, DoneHistoryModal } from "./ModalWindows";

const {useState,useEffect} = React;

export const NormalHistory = (props) =>{
const [showHistoryModal, setShowHistoryModal] = useState(false);

const showHistoryWithData =() =>{
    setShowHistoryModal(true);
}
    return (
        <div>
            <ListGroup.Item action onClick={()=>setShowHistoryModal(true)}>
                {props.history.name}
            </ListGroup.Item>
            <HistoryModal 
                show={showHistoryModal}
                onHide={() =>setShowHistoryModal(false)}
                history = {props.history}
            />
                
            </div>
    );
}


export const BacklogHistory = (props) =>{
    const [showHistoryModal, setShowHistoryModal] = useState(false);

    const showHistoryWithData =() =>{
        setShowHistoryModal(true);
    }
    return(
        <div>
            <ListGroup.Item action onClick={()=>setShowHistoryModal(true)}>
                {props.history.name}
                &nbsp;&nbsp;
                <Badge>
                    {props.history.state}
                </Badge>
            </ListGroup.Item>
            <HistoryModal 
                show={showHistoryModal}
                onHide={() =>setShowHistoryModal(false)}
                history = {props.history}
            />
        </div>
    );
}


export const DoneHistory = (props) =>{
    const [color, setColor] = useState("warning");
    const [showHistoryModal, setShowHistoryModal] = useState(false);

    const showHistoryWithData =() =>{
        setShowHistoryModal(true);
    }
    
    useEffect(()=>{
        if(props.history.tested==0){
            setColor("warning")
        }
        else{
            setColor("success")
        }
    });
    

    return (
        <div>
            <ListGroup.Item 
                action
                variant={color} 
                onClick={showHistoryWithData}
            >
                {props.history.name}
            </ListGroup.Item>
            <DoneHistoryModal 
                show={showHistoryModal}
                onHide={() =>setShowHistoryModal(false)}
                history = {props.history}
            />
        </div>

    );
}
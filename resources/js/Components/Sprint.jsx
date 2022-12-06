import React from "react";
import profile from "../Assets/profile.png"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Col, Container, Row } from "react-bootstrap";
import { Backlog, DoneTable, StatusTable} from "./BacklogList";

const {useState,useEffect} = React;

const Sprint = (props) =>{
    let sprint = props.sprint;
    const [watingHistories,setWatingHistories] = useState([]);
    const [doingHistories,setDoingHistories] = useState([]);
    const [doneHistories,setDoneHistories] = useState([]);

    useEffect(()=>{
        let wating = [];
        let doing = [];
        let done = [];
        for (var i =0; i < props.sprint.backlog.length; i++ ){
            for(var j = 0; j <props.sprint.backlog[i].histories.length; j++){
                let history=props.sprint.backlog[i].histories[j];
                if(history.state == "Espera"){
                    wating.push(history);
                }
                else if(history.state == "Proceso"){
                    doing.push(history);
                }
                else{
                    done.push(history);
                }
            }
        }
        setWatingHistories(wating);
        setDoingHistories(doing);
        setDoneHistories(done);
    },[]);
    
    return (
        <Container fluid>
            <Row style={{
                borderBottom: "3px solid #0d6efd"
            }}>
            <Col></Col>
            <Col style={{textAlign:"center"}}>
                <h4>
                    {sprint.name}
                </h4>
            </Col>
            <Col></Col>
            </Row>
            <p></p>
            <Row>
                <Backlog epics={sprint.backlog}/>
                {/*aqui van las tablas*/}
                <StatusTable histories = {watingHistories} title="En espera"/>
                <StatusTable histories = {doingHistories} title="En proceso"/>
                <DoneTable histories = {doneHistories}/>
            </Row>
        </Container>
    );
}

                //<StatusTable histories = {watingHistories} title="En espera"/>
                //<StatusTable histories = {doingHistories} title="En proceso"/>
                //<DoneTable histories = {doneHistories}/>
export default Sprint;
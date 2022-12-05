
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from "@/Components/Header";
import Title from "@/Components/Title";
import Sprint from "@/Components/Sprint";
import { Button, Container, Row} from "react-bootstrap";
import { MemebersModal, AddSprintModal, HistoryModal } from "@/Components/ModalWindows";

//import { MemebersModal } from "@/Components/ModalWindows";

const {useState,useEffect} = React;



const Dashboard = (props) =>{
    let project = props.project;
    
    const [title , setTitle ] = useState(project.name);
    const [sprints, setSprints] = useState(project.sprints);
    const [members, setMembers] = useState(project.members);

    const [showMembers, setShowMembers] = useState(false);
    const [showAddSprint, setShowAddSprint] = useState(false);
    const [url, setUrl] = useState("github.com");

    return (
        <div>
            <Header/>
            <Container fluid className="frame-container">
                <Title 
                    title={title} 
                    url={url}
                    controlMembers={() => setShowMembers(true)}
                />
                <div className="simon pa" id="sprints-container">
                    <p></p>
                    {sprints.map((sprint)=>{
                        return (
                            <Sprint sprint={sprint}/>          
                        );
                    })}
                    <p></p>
                    <Container fluid="sm">
                        <Row>
                            <Button
                                variant="primary"
                                onClick={() => setShowAddSprint(true)}
                            >
                                <i class="bi bi-plus-lg"></i>
                            </Button>
                        </Row>
                    </Container>
                    <p></p>
                </div>
                <MemebersModal 
                    show={showMembers}
                    onHide={() =>setShowMembers(false)}
                    members={members}
                />

                <AddSprintModal
                    show={showAddSprint}
                    onHide={() => setShowAddSprint(false)}
                />
            </Container>
        </div>
    );
}

export default Dashboard;
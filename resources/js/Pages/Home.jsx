import React from "react";
import ProjectCard from "@/Components/ProjectCard";
import Header from "@/Components/Header";
import '../../css/home.css'
import { Button } from "react-bootstrap";
import { CreateProyectModal } from "@/Components/ModalWindows";

    const {useState,useEffect} = React;
const Home = (props) =>{

    const [showCreateProject, setShowCreateProject] = useState(false);
    
    return(
        <div>
            <Header name={props.username}/>
            <p></p>
            <h1>
                &nbsp;&nbsp;&nbsp;Tus proyectos&nbsp;
                <Button
                    onClick={()=>setShowCreateProject(true)}
                >
                    <i className="bi bi-plus-lg"></i>
                </Button>
            </h1>
            <p></p>
            <div className="container-projects" fluid>
                {props.projects.map((project)=>{
                    return (
                        <ProjectCard project={project}/>          
                    );
                })}
            </div>
            <CreateProyectModal
                show={showCreateProject}
                onHide={() => setShowCreateProject(false)}
            />
        </div>
    );
}

export default Home;
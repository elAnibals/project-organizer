import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Badge, Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useForm } from "@inertiajs/inertia-react";

const {useState,useEffect} = React;
const Member = (props) =>{
    let member = props.member;
    const [changing, setChanging]=useState(false);
    const [rol, setRol]=useState(member.rol);
    const { data, setData, patch, processing, errors, reset } = useForm({
        rol: '',
    });

    const [rols, setRols] = useState(["Scrum Master", "Tester", "Product Owner", "Desarrollador"]);
    const [form, setForm]= useState({});

    const [setField] = (field, value) =>{
        setForm({
            ...form,
            [field]:value
        })
    }


    const onChange = ({evt}) =>{
        console.log(1);
    }

    const submit = (e) => {
        e.preventDefault();

        patch(route('update.Member',member.id));
    };

    const changeRolClick = (evt) =>{
        setChanging(true);
    }

    const aceptRolClick = (evt) =>{
        setChanging(false)
    }

    return(
        <div>
            <ListGroup.Item>
                <Row>
                    <Col>
                        {member.name}
                    </Col>
                    <Col>
                        {  changing ?
                            <Form className="d-flex">
                                <Form.Select 
                                    onChange={onchange}
                                    as="select"
                                >
                                    <option>Scrum Master</option>
                                    <option>Product Owner</option>
                                    <option>Tester</option>
                                    <option>Desarrollador</option>
                                </Form.Select>
                                &nbsp;
                                <Button 
                                    onClick={aceptRolClick}
                                    variant="outline-success"
                                    type="submit"
                                    onSubmit={submit}
                                >
                                    <i className="bi bi-check2"></i>
                                </Button >
                            </Form>
                            :
                            <Badge>{member.rol}</Badge>
                        }
                    </Col>
                    <Col className="text-center">
                        <Button 
                            variant="outline-warning" 
                            onClick={changeRolClick}
                        >
                            <i class="bi bi-pencil"></i>
                        </Button>
                        &nbsp;
                        <Button variant="outline-danger">
                            <i className="bi bi-trash"></i>
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        </div>
    );
}

export default Member;
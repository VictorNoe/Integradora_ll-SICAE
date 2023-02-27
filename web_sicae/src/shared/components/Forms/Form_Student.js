import React, {useState} from "react";
import {Button, Form , Modal , Col ,Row} from "react-bootstrap";


export const Form_Student = () =>{

    //Validation
    const [validated, setValidated] = useState(false);
      
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    setValidated(true);
    };

    return(
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Registro Estudiante</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group className="mb-2" controlId="Name">
                    <Form.Label required type="text">Nombre:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Nombre" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="Lastname">
                    <Form.Label>Apellidos:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Apellidos" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="Email">
                    <Form.Label>Matricula:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Matricula" />
                </Form.Group>

                <Row className="mb-2">
                    <Col>
                        <Form.Group className="mb-1" md="1" controlId="User">
                            <Form.Label>Cuatrimestre:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="text" placeholder="Cuatrimestre" />
                        </Form.Group>                    
                    </Col>
                    <Col>
                        <Form.Group className="mb-1" md="1" controlId="User">
                            <Form.Label>Grupo:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="text" placeholder="Grupo" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-2" controlId="Password">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="password" placeholder="Contraseña" />
                </Form.Group>
                <Modal.Footer>
                    <Button variant="success" type='submit'>Registrar</Button>
                    <Button variant="danger">Cancelar</Button>
                </Modal.Footer>
            </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
)}

import React, {useState} from "react";
import {Button, Form , Modal , Col ,Row} from "react-bootstrap";


export const Form_Class = () =>{

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
          <Modal.Title>Nuevo Registro Clase</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group className="mb-2" controlId="Name">
                    <Form.Label required type="text">Docente:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Nombre" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="Lastname">
                    <Form.Label>Materia:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Materia" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="Email">
                    <Form.Label>Grupo:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Grupo" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="Password">
                    <Form.Label>Cuatrimestre:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="password" placeholder="Cuatrimestre" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="Password">
                    <Form.Label>Año:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="password" placeholder="Año" />
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

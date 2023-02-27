import React, {useState} from "react";
import {Button, Form , Modal , Col ,Row} from "react-bootstrap";


export const Form_Subject = () =>{

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
          <Modal.Title>Nuevo Registro Materia</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group className="mb-2" controlId="Name">
                    <Form.Label required type="text">Acronimo:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="BD" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="Lastname">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Base de Datos" />
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

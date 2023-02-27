import React, {useState} from "react";
import {Button, Form , Modal} from "react-bootstrap";


export const Form_Teacher = () =>{

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
          <Modal.Title>Nuevo Registro Docente</Modal.Title>
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
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="email" placeholder="Correo" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="User">
                    <Form.Label>Usuario:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Usuario" />
                </Form.Group>

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

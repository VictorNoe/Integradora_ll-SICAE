import React, {useState} from "react";
import {Button, Form , Modal } from "react-bootstrap";


export const Form_Class = (props) =>{

    const [group, setGroup] = useState(null);
    const [materia, setMateria] = useState(null);
    const [profesor, setProfesor] = useState(null);

    const addClass = async () => {
        if(group !== null && materia !== null && profesor !== null){
            await fetch(`http://localhost:8080/api/clas/`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "status":1,
                    "group": {
                        "id":`${group}`
                    },
                    "users":{
                        "email": `${profesor}`,
                    },
                    "subject":{
                        "id":`${materia}`
                    },

                }),
            })
                .then( async (response)=>
                    await response.json())
                .then((data)=>{
                    console.log()(data.data)
                })
                .catch((err)=> {
                    console.log(err)
                });
        }

    }

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
      <Modal
          {...props}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Registro Clase</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group className="mb-2" controlId="Name">
                    <Form.Label required type="text">Docente:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Nombre" value={profesor} onChange={(e) => (setProfesor(e.target.value))}/>
                </Form.Group>

                <Form.Group className="mb-2" controlId="Lastname">
                    <Form.Label>Materia:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Materia" value={materia} onChange={(e) => (setMateria(e.target.value))}/>
                </Form.Group>

                <Form.Group className="mb-2" controlId="Email">
                    <Form.Label>Grupo:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Grupo" value={group} onChange={(e) => (setGroup(e.target.value))}/>
                </Form.Group>

                <Modal.Footer>
                    <Button variant="success" type='submit' onClick={()=> addClass()}>Registrar</Button>
                    <Button variant="danger">Cancelar</Button>
                </Modal.Footer>
            </Form>
        </Modal.Body>
      </Modal>
    </div>
)}

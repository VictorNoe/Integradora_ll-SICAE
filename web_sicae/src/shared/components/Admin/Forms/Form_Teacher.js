import React, {useState} from "react";
import {Button, Form , Modal} from "react-bootstrap";


export const Form_Teacher = (props) =>{

    const {show,onHide} = props
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)

    //agregar maestro
    const addTeacher = async () => {
        if(email !== null && password !== null && name !== null && lastName !== null){
            await fetch(`http://localhost:8080/api/users/`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": `${email}`,
                    "name": `${name}`,
                    "lastname": `${lastName}`,
                    "password": `${password}`,
                    "role": 1,
                    "status": 1,
                }),
            })
                .then( async (response)=>
                    await response.json())
                .then((data)=>{
                    console.log(data.data)
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
                    <Modal.Title>Nuevo Registro Docente</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-2" controlId="Name">
                            <Form.Label required type="text">Nombre:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="text" placeholder="Nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="Lastname">
                            <Form.Label>Apellidos:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="text" placeholder="Apellidos" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="Email">
                            <Form.Label>Correo:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="email" placeholder="Correo" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="Password">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="success" type='submit' onClick={()=>(addTeacher())}>Registrar</Button>
                            <Button variant="danger" onClick={onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
)}

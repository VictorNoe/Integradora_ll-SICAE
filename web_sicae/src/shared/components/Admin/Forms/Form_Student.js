import React, {useEffect, useState} from "react";
import {Button, Form , Modal} from "react-bootstrap";


export const Form_Student = (props) =>{

    const URL = `http://localhost:8080/api/group/`
    const [lastName, setLastName] = useState(null)
    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)
    const [matricula, setMatricula] = useState(null)
    const [group, setGroup] = useState(null)
    const [groupGet, setGroupGet] = useState([])

    const addStudent = async () => {
        if(lastName !== null && name !== null && group !== null && password !== null && matricula !== null){
            await fetch(`http://localhost:8080/api/student/`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": `${matricula}`,
                    "name": `${name}`,
                    "lastname": `${lastName}`,
                    "password": `${password}`,
                    "group": {
                        "id": `${group}`,
                    }
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

    useEffect(()=>{
        fetch(URL).then((response)=>{return response.json()})
            .then((data)=> {
                console.log(data.data);
                setGroupGet(data.data)
            })
            .catch((error)=>{
                console.log(error.message)
            })
    },[])

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
          <Modal.Title>Nuevo Registro Estudiante</Modal.Title>
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

                <Form.Group className="mb-2" controlId="matricula">
                    <Form.Label>Matricula:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="text" placeholder="Matricula" value={matricula} onChange={(e)=>setMatricula(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-1" md="1" controlId="User">
                    <Form.Label>Cuatrimestre:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Select aria-label="Default select example" value={group} onChange={(e)=>setGroup(e.target.value)}>
                        <option>Default select</option>
                        {groupGet.map((groupG)=>(
                            <option value={groupG.id}>{groupG.degree}-.{groupG.letter} {groupG.career.acronim}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-2" controlId="Password">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control required type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Modal.Footer>
                    <Button variant="success" type='submit' onClick={()=> (addStudent())}>Registrar</Button>
                    <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
                </Modal.Footer>
            </Form>
        </Modal.Body>
      </Modal>
    </div>
)}

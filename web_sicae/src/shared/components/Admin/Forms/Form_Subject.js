import React, {useEffect, useState} from "react";
import {Button, Form , Modal , Col ,Row} from "react-bootstrap";


export const Form_Subject = (props) =>{

    const {id,state,onState} = props

    //resgistrar materia
    const [acronim, setAcronim] = useState(null);
    const [name, setName] = useState(null);

    if (state === true){
        const URL = `http://localhost:8080/api/subject/${id}`
        fetch(URL).then((response)=>{return response.json()})
            .then((data)=> {
                console.log(data.data);
                setName(data.data.name)
                setAcronim(data.data.acronim)
            })
            .catch((error)=>{
                console.log(error.message)
            })
        onState()
    }

    const addSubject = async () => {
        if(name !== null && acronim !== null){
            await fetch(`http://localhost:8080/api/subject/`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": `${name}`,
                    "acronim": `${acronim}`
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

    //Actualisar materia
    const update = async () => {
        console.log(id)
        console.log(acronim)
        console.log(name)
        if(name !== null && acronim !== null){
            await fetch(`http://localhost:8080/api/subject/`,{
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": `${id}`,
                    "name": `${name}`,
                    "acronim": `${acronim}`,
                }),
            })
                .then( async (response)=>
                    await response.json())
                .then((data)=>{
                    console.log(data.error)
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
                    <Modal.Title>Nuevo Registro Materia</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-2" controlId="Name">
                            <Form.Label required type="text">Acronimo:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="text" placeholder="BD"  defaultValue={acronim} value={acronim} onChange={(e)=>setAcronim(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="Lastname">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="text" placeholder="Base de Datos" defaultValue={name} value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Form.Group>

                        <Modal.Footer>
                            {id === null
                                ? <Button variant="success" type='submit' onClick={()=>addSubject()}>Registrar</Button>
                                : <Button variant="success" type='submit' onClick={()=>update()}>Actualizar</Button>
                            }
                            <Button variant="danger" onClick={()=>(props.onHide())}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
)}

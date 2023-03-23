import React, {useEffect, useState} from "react";
import {Button, Form , Modal , Col ,Row} from "react-bootstrap";


export const Form_Group = (props) =>{

    const {id,state,onState} = props

    //registrar grupo
    const[degree,setDegree] = useState(null);
    const[letter, setLetter] = useState(null);
    const[year, setYear] = useState(null);
    const[career, setCareer] = useState(null);
    const[careerGet, setCareerGet] = useState([]);

    const URL = `http://localhost:8080/api/career/`

    if (state === true){
        const URL = `http://localhost:8080/api/group/${id}`
        fetch(URL).then((response)=>{return response.json()})
            .then((data)=> {
                console.log(data.data);
                setDegree(data.data.degree)
                setLetter(data.data.letter)
                setYear(data.data.year)
                setCareer(data.data.career.id)
            })
            .catch((error)=>{
                console.log(error.message)
            })
        onState()
    }

    const addGroup = async () => {
        if(degree !== null && letter !== null && year !== null && career !== null){
            await fetch(`http://localhost:8080/api/group/`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "degree": `${degree}`,
                    "letter": `${letter}`,
                    "year": `${year}`,
                    "career": {
                        "id": `${career}`,
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

    //Actualisar grupo
    const updateGroup = async () => {
        console.log(id)
        console.log(degree)
        console.log(letter)
        console.log(year)
        console.log(career)
        if(degree !== null && letter !== null && year !== null && career !== null){
            await fetch(`http://localhost:8080/api/group/`,{
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": `${id}`,
                    "degree": `${degree}`,
                    "letter": `${letter}`,
                    "year": `${year}`,
                    "career": {
                        "id": `${career}`,
                    }
                }),
            })
                .then( async (response)=>
                    await response.json())
                .then((data)=>{
                    console.log(data.data)
                }
                )
                .catch((err)=> {
                    console.log(err)
                });
        }
    }

    useEffect(()=>{
        fetch(URL).then((response)=>{return response.json()})
            .then((data)=> {
                console.log(data.data);
                setCareerGet(data.data)
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
                    <Modal.Title>Nuevo Registro Grupo</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-2" controlId="Name">
                            <Form.Label required type="text">Grado:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="text" placeholder="5" defaultValue={degree} value={degree} onChange={(e)=>setDegree(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="Lastname">
                            <Form.Label>Grupo:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="text" placeholder="B" defaultValue={letter} value={letter} onChange={(e)=>setLetter(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="Name">
                            <Form.Label required type="text">Carrera:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Select aria-label="Default select example" defaultValue={career} value={career} onChange={(e)=>setCareer(e.target.value)}>
                                <option>Default select</option>
                                {careerGet.map((carrerMap)=>(
                                    <option value={carrerMap.id}>{carrerMap.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="Lastname">
                            <Form.Label>Año:</Form.Label>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control required type="text" placeholder="2023" defaultValue={year} value={year} onChange={(e)=>setYear(e.target.value)}/>
                        </Form.Group>


                        <Modal.Footer>
                            {id === null
                                ? <Button variant="success" type='submit' onClick={()=>addGroup()}>Registrar</Button>
                                : <Button variant="success" type='submit' onClick={()=>updateGroup()}>Actualizar</Button>
                            }
                            <Button variant="danger" onClick={props.onHide}>Cancelar</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

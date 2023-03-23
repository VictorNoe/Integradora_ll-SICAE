import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import {Form_Student} from "../Forms/Form_Student";

export const TablesAlumno = () => {
    //Consumo APi
    const URL = `http://localhost:8080/api/student/`
    const [Alumno,setAlumno] = useState([])
    const [modalShow, setModalShow] = useState(false)

    useEffect(()=>{
        fetch(URL).then((response)=>{return response.json()})
        .then((data)=> {
            console.log(data.data);
            setAlumno(data.data)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }, [])

    //Modificaciones 
    const [isEnabled, setIsEnabled] = useState(false);

    const handleClick = () => {
        setIsEnabled(!isEnabled);
    }

    const style = {
        Button: {
            backgroundColor: isEnabled ? 'green' : 'red',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
        }
    };
    return (
        <>
            <div className="container-fluid mt-3">
                <Table striped bordered hover>
                    <thead style={styles.TableThead}>
                    <tr style={styles.TableCabecera}>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Matricula</th>
                        <th>Cuatrimestre</th>
                        <th>Grupos</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody style={styles.Text}>
                    {Alumno.map((post)=>{
                        return(
                            <tr key={post.id}>
                                <td>{post.name}</td>
                                <td>{post.lastname}</td>
                                <td>{post.id}</td>
                                <td>{post.group.degree}</td>
                                <td>{post.group.letter}</td>
                                <td>
                                    <FaRegEdit style={styles.Icon}/>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
            <a onClick={()=>(setModalShow(true))} className="btn-flotante">Registrar</a>
            <Form_Student
                show={modalShow}
                onHide={()=> (setModalShow(false))}
            />
        </>
    )
}

const styles = {
    TableThead: {
        backgroundColor: "#255770",
        padding: "100px",
    },
    TableCabecera: {
        color: "white",
        fontSize: "15px",
        fontWeight: "SemiBold",
        fontfamily: "Inter",
        textAlign: "center",
    },
    Text: {
        fontfamily: "Inter",
        fontSize: "15px",
        fontWeight: "SemiBold",
        textAlign: "center",
    },
    Icon: { 
        height: "auto",
        width: "30px",
        marginRight: "10px",
    },
}
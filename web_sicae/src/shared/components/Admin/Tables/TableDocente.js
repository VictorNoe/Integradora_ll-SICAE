import React, { useState,useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import estilos from '../../../../utils/estilos.css'
import {Form_Teacher} from "../Forms/Form_Teacher";
import {Loading} from "../../Loading";

export const TablesDocentes=()=> {

    //Consumo Api
    const URL = `http://localhost:8080/api/users/`
    const [Docente,setDocente] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [statusUser, setStatusUser] = useState(null)

    const statusUsers = async (id,status,name,lastname,role,password) => {

        await fetch(`http://localhost:8080/api/users/`,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": `${id}`,
                "lastname":`${lastname}`,
                "name":`${name}`,
                "password":`${password}`,
                "role":`${role}`,
                "status": `${status === 1 ? 0 : 1}`,
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
        window.location.reload()
    }

    useEffect(()=>{
        fetch(URL).then((response)=>{return response.json()})
        .then((data)=> {
            console.log(data.data);
            setDocente(data.data)
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

    if (!Docente.length) return <Loading/>

  return (
    <>
        <div className="container-fluid mt-3">
            <Table striped bordered hover>
                <thead style={styles.TableThead}>
                <tr style={styles.TableCabecera}>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody style={styles.Text}>
                {Docente.map((post)=>
                    (
                        <>
                            {
                                post.role === 1
                                &&
                                <tr>
                                    <td>{post.name}</td>
                                    <td>{post.lastname}</td>
                                    <td>{post.email}</td>
                                    <td>
                                        <FaRegEdit style={styles.Icon}/>
                                        {post.status === 1
                                            ? <button className="btn btn-success" onClick={()=>(statusUsers(post.email,post.status,post.name,post.lastname,post.role,post.password))}>Activo</button>
                                            : <button className="btn btn-danger" onClick={()=>(statusUsers(post.email,post.status,post.name,post.lastname,post.role,post.password))}>Inactivo</button>
                                        }
                                    </td>
                                </tr>
                            }
                        </>
                    )
                )}
                </tbody>
            </Table>
        </div>
        <a onClick={()=>(setModalShow(true))} className="btn-flotante">Registrar</a>
        <Form_Teacher
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
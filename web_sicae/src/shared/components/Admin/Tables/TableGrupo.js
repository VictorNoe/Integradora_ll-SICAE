import React, { useState,useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import {Form_Group} from "../Forms/Form_Group";

export const TablesGrupos = () => {
    //Consumo Api
    const URL = `http://localhost:8080/api/group/`
    const [Grupo,setGrupo] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [idGrupo, setIdGrupo] = useState(null)
    const [state, setState] = useState(false)

    useEffect(()=>{
        fetch(URL).then((response)=>{return response.json()})
        .then((data)=> {
            console.log(data.data);
            setGrupo(data.data)
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
                        <th>Grado</th>
                        <th>Grupo</th>
                        <th>Carrera</th>
                        <th>Año</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody style={styles.Text}>
                    {Grupo.map((grupo)=>(
                            <tr>
                                <td>{grupo.degree}</td>
                                <td>{grupo.letter}</td>
                                <td>{grupo.career.acronim}</td>
                                <td>{grupo.year}</td>
                                <td>
                                    <FaRegEdit style={styles.Icon} onClick={()=>(setModalShow(true),setIdGrupo(grupo.id),setState(true))} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <a onClick={()=>(setModalShow(true),setIdGrupo(null))} className="btn-flotante">Registrar</a>
            <Form_Group
                id={idGrupo}
                state={state}
                show={modalShow}
                onHide={()=> (setModalShow(false),setIdGrupo(null),setState(false))}
                onState={()=>setState(false)}
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
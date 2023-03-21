import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';

export const TableClases = () => {
    //Consumo Api
    const URL = `http://localhost:8080/api/career/`
    const [Carrera,setCarrera] = useState([])

    useEffect(()=>{
        fetch(URL).then((response)=>{return response.json()})
        .then((data)=> {
            console.log(data.data);
            setCarrera(data.data)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }, [])
    return (
        <>
            <div>
                <div style={styles.Div}>
                    <div style={styles.Div1}>
                        <Table striped bordered hover>
                            <tbody style={styles.Text}>
                                <tr>
                                    <td>1</td>
                                    <td>Enrique</td>
                                    <td>Osorio Jasso</td>
                                    <td>20213tn033</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
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
    Div1: {
        marginTop:"10px"
    },
    Div: {
        width: "95%",
        height: 60,
        margin: "auto",
    },
}
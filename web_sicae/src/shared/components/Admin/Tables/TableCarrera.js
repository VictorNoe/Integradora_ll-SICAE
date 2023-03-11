import React, { useState,useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';

export const TablesCarrera = () => {
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
            <Table striped bordered hover>
                <thead style={styles.TableThead}>
                    <tr style={styles.TableCabecera}>
                        <th>#</th>
                        <th>Acronimo</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody style={styles.Text}>
                    {Carrera.map((post)=>{
                        return(
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.acronim}</td>
                            <td>{post.name}</td>
                            <td>
                                <FaRegEdit style={styles.Icon} />
                                <Button style={style.Button} onClick={handleClick}>
                                    {isEnabled ? 'Enabled' : 'Disabled'}
                                </Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
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
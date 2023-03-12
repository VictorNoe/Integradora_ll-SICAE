import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';

export const TablesAlumno = () => {
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
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Matricula</th>
                        <th>Cuatrimestre</th>
                        <th>Grupos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody style={styles.Text}>
                    <tr>
                        <td>1</td>
                        <td>Enrique</td>
                        <td>Osorio Jasso</td>
                        <td>20213tn033@utez.edu.mx</td>
                        <td>5</td>
                        <td>B</td>
                        <td>
                            <FaRegEdit style={styles.Icon} />
                            <Button style={style.Button} onClick={handleClick}>
                                {isEnabled ? 'Enabled' : 'Disabled'}
                            </Button>
                        </td>
                    </tr>
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
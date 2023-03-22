import React, { useState } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';

export const ClasesTable = () => {
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
import React from 'react'
import { Row, Table } from 'react-bootstrap';

const docente = "Cesar";
const materia = "A.M";
const grupo = "5";
const grado = "B";
export const TableClaseRegistro = () => {
    return (
        <>
            <div>
                <div style={styles.Div}>
                    <Row md="6" >

                        <div>
                            <div style={styles.Docente}>
                                <h5 style={{ marginTop: "15px", padding: "4px", marginLeft: "5px" }}>Docente: {docente}</h5>
                            </div>
                        </div>
                        <div>
                            <div style={styles.Materia}>
                                <h5 style={{ marginTop: "15px", padding: "4px", marginLeft: "5px" }}>Materia: {materia}</h5>
                            </div>
                        </div>
                        <div>
                            <div style={styles.Grupo}>
                                <h5 style={{ marginTop: "15px", padding: "4px", marginLeft: "5px" }}>Grupo: {grupo}</h5>
                            </div>
                        </div>
                        <div>
                            <div style={styles.Grado}>
                                <h5 style={{ marginTop: "15px", padding: "4px", marginLeft: "5px" }}>Grado: {grado}</h5>
                            </div>
                        </div>
                    </Row>
                    <div style={styles.Div1}>
                        <Table striped bordered hover>
                    <thead style={styles.TableThead}>
                        <tr style={styles.TableCabecera}>
                            <th>#</th>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Matricula</th>
                        </tr>
                    </thead>
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
    Div: {
        backgroundColor: "#255770",
        width: "95%",
        height: 60,
        margin: "auto",
        borderRadius: "10px 10px 0px 0px",
    },
    Div1: {
        marginTop:"10px"
    },
    Row: {
        margin: "10px 10px"
    },
    Docente: {
        backgroundColor: "#fff",
        borderRadius: "5px",
        marginLeft: "20px",
        height: "35px",
        width: "auto",
    },
    Materia: {
        backgroundColor: "#fff",
        borderRadius: "5px",
        height: "35px",
        width: "auto",
    },
    Grupo: {
        backgroundColor: "#fff",
        borderRadius: "5px",
        height: "35px",
        width: "auto",
    },
    Grado: {
        backgroundColor: "#fff",
        borderRadius: "5px",
        height: "35px",
        width: "auto",
    },
}

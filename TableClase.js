import React from 'react'
import { Row, Form } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

export const TableClase = () => {
  return (
    <>  
    <div>
        <div style={styles.Div}>
        <Row md="6" >
        <BiSearch style={styles.Icon}/>
        <h4 style={{marginTop: "15px", color: "#fff"}}>Buscar</h4>
        <Form.Select aria-label="Default select example" style={styles.Anio}>
        <option>Año</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" style={styles.carerra}>
        <option>Carrera</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example" style={styles.cuatri}>
        <option>Cuatrimestre</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
    </Row>
        </div>
    </div>
    </>
  )
}

const styles = {
    Div: {
        backgroundColor: "#255770",
        width: "95%",
        height: 60,
        margin: "auto",
        borderRadius: "10px 10px 0px 0px",
    },
    Icon :{
        height: "auto", 
        width: "60px", 
        color: "#fff",
        marginLeft: "20px",
        marginTop: "10px",
    },
    Row :{
        margin:"10px 10px"
    },
    Anio :{
        width:"10%",
        marginLeft: "367px",
        marginTop: "10px",
    },
    carerra :{
        width:"15%",
        marginLeft: "10px",
        marginTop: "10px",
    },
    cuatri :{
        width:"20%",
        marginLeft: "10px",
        marginTop: "10px",
    }
}

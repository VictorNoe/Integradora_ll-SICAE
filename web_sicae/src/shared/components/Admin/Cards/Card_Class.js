import React from "react";
import {Col ,Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export const Card_class = () =>{

    return(
        <Card style={{height:"250px",width:"350px", backgroundColor:"#6a8680"}}>
            <Card.Body style={{color:"white"}}>
                <Row md={2}>
                    <Col>
                        <h5>Docentes</h5>
                        <p>Alberto</p>
                    </Col>
                    
                    <Col>
                        <h5>Materia</h5>
                        <p>Programacion Orientado a objetos</p>
                    </Col>
                    
                    <Col>
                        <h5>Grupo</h5>
                        <p>A</p>
                    </Col>
                    
                    <Col>
                        <h5>Cuatrimestre</h5>
                        <p>2</p>
                    </Col>
                    
                    <Col>
                        <h5>Año</h5>
                        <p>2023</p>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
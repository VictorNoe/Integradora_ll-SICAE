import React from "react";
import Card from 'react-bootstrap/Card';
import {Col ,Row} from "react-bootstrap";
import LogoUtez from "../../../assets/img/LogoMiniUtez.jpg"
import * as Icon from 'react-bootstrap-icons'


export const Cards = () =>{
    return(
        <Row xs="3" md="3" style={{margin:"20px 20px"}}>
            <Col style={{marginBlock:"10px"}}>
                <Card>
                    <Card.Body style={{textAlign:"center"}}>  
                        <Icon.Person style={{height:"150px",width:"150px"}}></Icon.Person>
                    </Card.Body>
                    <Card.Header style={{backgroundColor:"#109175", borderRadius:"0px 0px 10px 10px"}}>
                        <Card.Title style={{color:"white", textAlign:"center"}}><h1>Docentes</h1></Card.Title>        
                    </Card.Header>
                </Card>
            </Col>

            <Col style={{marginBlock:"10px"}}>
                <Card>
                    <Card.Body style={{textAlign:"center"}}>  
                        <Icon.PersonBadge style={{height:"150px",width:"150px"}}></Icon.PersonBadge>
                    </Card.Body>
                    <Card.Header style={{backgroundColor:"#109175", borderRadius:"0px 0px 10px 10px"}}>
                        <Card.Title style={{color:"white", textAlign:"center"}}><h1>Alumnos</h1></Card.Title>        
                    </Card.Header>
                </Card>
            </Col>

            <Col style={{marginBlock:"10px"}}>
                <Card>
                    <Card.Body style={{textAlign:"center"}}>  
                        <Icon.CardList style={{height:"150px",width:"150px"}}></Icon.CardList>
                    </Card.Body>
                    <Card.Header style={{backgroundColor:"#109175", borderRadius:"0px 0px 10px 10px"}}>
                        <Card.Title style={{color:"white", textAlign:"center"}}><h1>Clases</h1></Card.Title>        
                    </Card.Header>
                </Card>
            </Col>

            <Col style={{marginBlock:"10px"}}>
                <Card>
                    <Card.Body style={{textAlign:"center"}}>  
                        <Icon.Book style={{height:"150px",width:"150px"}}></Icon.Book>
                    </Card.Body>
                    <Card.Header style={{backgroundColor:"#109175", borderRadius:"0px 0px 10px 10px"}}>
                        <Card.Title style={{color:"white", textAlign:"center"}}><h1>Materias</h1></Card.Title>        
                    </Card.Header>
                </Card>
            </Col>

            <Col style={{marginBlock:"10px"}}>
                <Card>
                    <Card.Body style={{textAlign:"center"}}>  
                        <Icon.ListTask style={{height:"150px",width:"150px"}}></Icon.ListTask>
                    </Card.Body>
                    <Card.Header style={{backgroundColor:"#109175", borderRadius:"0px 0px 10px 10px"}}>
                        <Card.Title style={{color:"white", textAlign:"center"}}><h1>Grupos</h1></Card.Title>        
                    </Card.Header>
                </Card>
            </Col>

            <Col style={{marginBlock:"10px"}}>
                <Card>
                    <Card.Body style={{textAlign:"center"}}>  
                        <Icon.PersonVideo2 style={{height:"150px",width:"150px"}}></Icon.PersonVideo2>
                    </Card.Body>
                    <Card.Header style={{backgroundColor:"#109175", borderRadius:"0px 0px 10px 10px"}}>
                        <Card.Title style={{color:"white", textAlign:"center"}}><h1>Carreras</h1></Card.Title>        
                    </Card.Header>
                </Card>
            </Col>
            
        </Row>
            

    )
}
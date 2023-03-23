import React, {useEffect, useState} from "react";
import {Col ,Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

export const Card_class = (props) =>{

    const URL = `http://localhost:8080/api/clas/`
    const [clas, setClas] = useState([])

    useEffect(()=> {
        fetch(URL).then((response)=>{return response.json()})
            .then((data)=> {
                console.log(data.data);
                setClas(data.data)
            })
            .catch((error)=>{
                console.log(error.message)
            })
    },[])

    console.log(clas)
    return(
        <div className="row">
            {clas.map((clases) => (
                <>
                    <div className="col-sm-6 col-xl-4 mt-4">
                        <Link to={"/"} style={{textDecoration:"none"}}>
                            <Card className="text-center" style={{borderRadius: 20}}>
                                <Card.Body style={{height: '15rem'}} key={clases.id}>
                                    <div className="row text-start">
                                        <div className="col-6">Docente</div>
                                        <div className="col-6">Materia</div>
                                        <div className="col-6">{clases.emailTeacher }</div>
                                        <div className="col-6">{clases.group.career.acronim}</div>
                                    </div>
                                    <div className="row text-start mt-3">
                                        <div className="col-6">Grado</div>
                                        <div className="col-6">Grupo</div>
                                        <div className="col-6">{clases.group.degree}</div>
                                        <div className="col-6">{clases.group.letter}</div>
                                    </div>
                                    <div className="row text-start mt-3">
                                        <div className="col-12">Año</div>
                                        <div className="col-12">{clases.group.year}</div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </>
            ))}

        </div>
    )
}
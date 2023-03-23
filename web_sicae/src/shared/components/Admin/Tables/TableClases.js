import React, {useEffect, useState} from 'react'
import {Navbar} from 'react-bootstrap';
import {Card_class} from "../Cards/Card_Class";
import {Form_Class} from "../Forms/Form_Class";

export const TableClases = () => {
    //Consumo Api
    const URL = `http://localhost:8080/api/career/`
    const [Carrera,setCarrera] = useState([])
    const [modalShow, setModalShow] = useState(false)

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
            <div className="container-fluid mt-3">
                <div className="container-fluid" style={{backgroundColor:"#255770FF", borderTopRightRadius:20, borderTopLeftRadius:20}}>
                    <Navbar>
                        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="container-fluid" style={{borderColor:"black", backgroundColor:"#fff", borderBottomRightRadius:20, borderBottomLeftRadius:20}}>
                    <Card_class/>
                </div>
            </div>
            <a onClick={()=>(setModalShow(true))} className="btn-flotante">Registrar</a>
            <Form_Class
                show={modalShow}
                onHide={()=> (setModalShow(false))}
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
    Div1: {
        marginTop:"10px"
    },
    Div: {
        width: "95%",
        height: 60,
        margin: "auto",
    },
}
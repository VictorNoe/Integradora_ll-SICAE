import {Outlet, useParams} from "react-router-dom";
import {Form, Modal, Navbar, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import {Loading} from "../Loading";
import {URLSERVIS} from "../../plugins/Axios";
import {MostrarQR} from "./MostrarQR";
import Countdown from "./Temporizador";

export const TableStudens = () => {

    const {id} = useParams();

    const fecha = new Date();
    const [ano, setAno] = useState("");
    const [mes, setMes] = useState("");
    const [dia, setDia] = useState("");
    const [post, setPost] = useState([]);


    const [clases, setClases] = useState([]);
    const [studens, setStudens] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [state, setState] = useState(true)

    useEffect(() => {

        fetch(`http://localhost:8080/api/clas/${id}`).then((res) => {
            return res.json();
        }).then((resp) => {
            if(Object.keys(resp).length===0) {
                alert("error");
            } else {
                setClases(resp.data);
            }
        })

        const getStudens = async () => {
            const res1 = await URLSERVIS("student/");
            setStudens(res1.data.data)
        }

        getStudens();
        setAno(fecha.getFullYear())
        setMes(fecha.getMonth())
        setDia(fecha.getDay())

    },  [1000]);
    //consultar el qr


    //insertar nuevo qr
    const insert = async () => {
        await fetch(`http://localhost:8080/api/qr/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "date":  `${dia}-${mes}-${ano}`,
                "status": 1,
                "clas": {
                    "id": `${clases.id}`
                }
            }),
        })
            .then( async (response) =>
                await response.json())
            .then( async (data) => {
                await localStorage.setItem("status",data.data.id)
                console.log(data.data);
                setPost(data.data);
                console.log(post);
            }).
            catch((err)=> {
                console.log(err)
            });
    }

    if(!clases.subject) return <Loading/>

    return(
        <>
            <div className="container-fluid mt-3">
                <div style={{backgroundColor:"#D9D9D9"}}>
                    <Navbar style={{backgroundColor:"#255770FF"}}>
                        <div className="container-fluid">
                            <Navbar.Brand style={{color:"#FFF"}}>{clases.subject.acronim}</Navbar.Brand>
                            <Navbar.Toggle/>
                            <Navbar.Collapse className="justify-content-end">
                                {
                                    !state && <Countdown/>
                                }
                                {
                                    state
                                        ? <Button style={{backgroundColor:"#109175", borderColor:"#109175"}} onClick={() => (setModalShow(true),setState(false),insert())}>Generar QR</Button>
                                        :<Button style={{backgroundColor:"#109175", borderColor:"#109175"}} onClick={() => setModalShow(true)}>Mostrar QR</Button>
                                }
                            </Navbar.Collapse>
                        </div>
                        <MostrarQR
                            show={modalShow}
                            qrState={state}
                            clase={clases.group.degree}
                            onHide={() => (setModalShow(false))}
                            qrCan={()=> (setState(true),setModalShow(false),localStorage.clear())}
                            qr={post}
                        />
                    </Navbar>
                    <div className="container-fluid mb-3">
                        <Table striped bordered hover size="sm" className="mt-3">
                            <thead style={{backgroundColor:"#255770FF",borderColor:"black",color:"white"}}>
                            <tr key={studens.id}>
                                <th style={{width:"3cm"}}>Matricula</th>
                                <th style={{width:"8cm"}}>Nombre Completo</th>
                                <th >Enero-Abril</th>
                            </tr>
                            </thead>
                            <tbody style={{backgroundColor:"#FFF",borderColor:"black"}} className="mb-3">
                            {studens.map((studen) => (
                                <>
                                    {(studen.group.degree === clases.group.degree && studen.group.letter === clases.group.letter)
                                        &&
                                        <tr key={studen.id}>
                                            <td>{studen.id}</td>
                                            <td>{`${studen.name} ${studen.lastname}`}</td>
                                            <td>
                                                <div className="row">
                                                    <div className="col-2 align-items-start">
                                                        <Form.Control
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                            value="x"
                                                        />
                                                    </div>
                                                    <div className="col-2 align-items-start">
                                                        <Form.Control
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                            value="x"
                                                        />
                                                    </div>
                                                    <div className="col-2 align-items-start">
                                                        <Form.Control
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                            value="x"
                                                        />
                                                    </div>
                                                    <div className="col-2 align-items-start">
                                                        <Form.Control
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                            value="x"
                                                        />
                                                    </div>
                                                    <div className="col-2 align-items-start">
                                                        <Form.Control
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                            value="x"
                                                        />
                                                    </div>
                                                    <div className="col-2 align-items-start">
                                                        <Form.Control
                                                            aria-label="Username"
                                                            aria-describedby="basic-addon1"
                                                            value="x"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    }
                                </>
                            ))
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
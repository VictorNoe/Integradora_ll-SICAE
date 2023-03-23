import React, {useEffect} from 'react'
import {Navbar} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import { Cards } from '../Cards/Cards';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TableClases } from '../Tables/TableClases';
import { TablesAlumno } from '../Tables/TableAlumno';
import { TablesCarrera } from '../Tables/TableCarrera';
import { TablesMaterias } from '../Tables/TableMaterias';
import { TablesGrupos } from '../Tables/TableGrupo';
import {TablesDocentes} from '../Tables/TableDocente';
import {Loading} from "../../Loading";



export const NavbarAdmin =()=> {
    const navigation = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=> {
        if (!sessionStorage.getItem('email')){
            navigation("/")
        }
        if(sessionStorage.getItem('role') === "1"){
            navigation(-1)
        }
    })
    const cerrar = () => {
        navigation("/")
        sessionStorage.clear()
    }

    if (!sessionStorage.getItem('email') || sessionStorage.getItem('role') === "1") return <Loading/>
  return (
      <div>
          <Navbar variant='light'style={{ backgroundColor: "#109175", padding: "10px" }}>
              <Navbar.Brand>
                  <Link to=""><FaHome style={{ height: "auto", width: "40px", color: "#fff" }}/></Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link style={styles.navbar}><Link to="Docentes" style={{textDecoration:"none",color:"white"}}>Docentes</Link></Nav.Link>
                  <Nav.Link style={styles.navbar}><Link to="Alumnos" style={{textDecoration:"none",color:"white"}}>Alumnos</Link></Nav.Link>
                  <Nav.Link style={styles.navbar}><Link to="Clases" style={{textDecoration:"none",color:"white"}}>Clases</Link></Nav.Link>
                  <Nav.Link style={styles.navbar}><Link to="Materias" style={{textDecoration:"none",color:"white"}}>Materias</Link></Nav.Link>
                  <Nav.Link style={styles.navbar}><Link to="Grupos" style={{textDecoration:"none",color:"white"}}>Grupos</Link></Nav.Link>
                  <Nav.Link style={styles.navbar}><Link to="Carreras" style={{textDecoration:"none",color:"white"}}>Carreras</Link></Nav.Link>
              </Nav>
              <Navbar.Collapse className="justify-content-end" >
                  <Button onClick={handleShow} style={{backgroundColor:"#109175", border:"none"}} ><FaPowerOff style={{ height: "auto", width: "40px",color:"white", justifyContent: "end"}}/></Button>
                  <Modal show={show} onHide={handleClose}style={{display:"fixed", alignItems:"center", justifyContent:"center"}}>
                      <Modal.Body >
                        <h1 style={{textAlign:"center"}}>Deseas Salir de la Aplicación</h1>
                        <p></p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="danger" onClick={handleClose}>
                              Cancelar
                          </Button>
                          <Button variant="success" onClick={cerrar}>
                              Cerrar Sesion
                          </Button>
                      </Modal.Footer>
                  </Modal>
              </Navbar.Collapse>
          </Navbar>
          <Routes>
              <Route index element={< Cards />}/>
              <Route path='Docentes' element={<TablesDocentes/>}/>
              <Route path='Alumnos' element={< TablesAlumno />}/>
              <Route path='Clases' element={< TableClases />}/>
              <Route path='Materias' element={< TablesMaterias />}/>
              <Route path='Grupos' element={< TablesGrupos />}/>
              <Route path='Carreras' element={< TablesCarrera />}/>
          </Routes>
      </div>
  )
}

const styles = {
    navbar: {
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
    },
}
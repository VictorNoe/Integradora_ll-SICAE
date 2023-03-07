import React from 'react'
import {Navbar} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';
import {Routes,Route,Link} from 'react-router-dom'
import { Cards } from '../Cards/Cards';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export const NavbarAdmin =()=> {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div>
          <Navbar variant='light'style={{ backgroundColor: "#109175", padding: "10px" }}>
              <Navbar.Brand>
                  <Link to="/"><FaHome style={{ height: "auto", width: "40px", color: "#fff" }}/></Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link style={styles.navbar}><Link to="/Docentes" style={{textDecoration:"none",color:"white"}}>Docentes</Link></Nav.Link>
                  <Nav.Link style={styles.navbar}><Link to="/Alumnos" style={{textDecoration:"none",color:"white"}}>Alumnos</Link></Nav.Link>
                  <Nav.Link style={styles.navbar}><Link to="/Clases" style={{textDecoration:"none",color:"white"}}>Clases</Link></Nav.Link>
                  <Nav.Link style={styles.navbar}><Link to="/Materias" style={{textDecoration:"none",color:"white"}}>Materias</Link></Nav.Link>
                  <Nav.Link style={styles.navbar}><Link to="/Grupos" style={{textDecoration:"none",color:"white"}}>Grupos</Link></Nav.Link>
                  <Nav.Link style={styles.navbar}><Link to="/Carreras" style={{textDecoration:"none",color:"white"}}>Carreras</Link></Nav.Link>
              </Nav>
              <Navbar.Collapse className="justify-content-end">
                  <Button onClick={handleShow} ><FaPowerOff style={{ height: "auto", width: "40px",color:"white", justifyContent: "end" }}/></Button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                          <Modal.Title>Deseas Cerrar Sesion</Modal.Title>
                      </Modal.Header>
                      <Modal.Footer>
                          <Button variant="Danger" onClick={handleClose}>
                              Cancelar
                          </Button>
                          <Button variant="Success" onClick={handleClose}>
                              Cerrar Sesion
                          </Button>
                      </Modal.Footer>
                  </Modal>
              </Navbar.Collapse>
          </Navbar>
          <Routes>
              <Route path='Home' element={< Cards />}/>
          </Routes>
      </div>
  )
}

const styles = {
    navbar: {
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
    }
}
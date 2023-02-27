import React from 'react'
import { Container, Navbar,Image } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import img from '../assets/img/LogoMiniUtez.jpg'
//import { Home } from 'feather-icons-react/';
import { FaHome } from 'react-icons/fa';
// import { GrLogout } from 'react-icons/gr';
import { FaPowerOff } from 'react-icons/fa';


export default function NavbarAdmin() {
  return (
    <>
        <Navbar variant='light'style={{ backgroundColor: "#109175", padding: "10px" }}>
            <Navbar.Brand>
                <FaHome style={{ height: "auto", width: "40px", color: "#fff" }}/>
                
            </Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link style={styles.navbar} href="#docente">Docente</Nav.Link>
            <Nav.Link style={styles.navbar} href="#alumnos">Alumnos</Nav.Link>
            <Nav.Link style={styles.navbar} href="#clases">Clases</Nav.Link>
            <Nav.Link style={styles.navbar} href="#materias">Materias</Nav.Link>
            <Nav.Link style={styles.navbar} href="#grupos">Grupos</Nav.Link>
            <Nav.Link style={styles.navbar} href="#carreras">Carreras</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <FaPowerOff style={{ height: "auto", width: "40px", justifyContent: "end" }}/>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}

const styles = {
    navbar: {
        color: "white",
        fontSize: "18px",
        fontWeight: "bold",
    }
}

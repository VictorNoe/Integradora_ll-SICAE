import {Button, Container, Image, Navbar, NavDropdown} from "react-bootstrap";
import PhotoPerfil from '../../../assets/img/Noe.png'
import {Link, Route, Routes} from "react-router-dom";
import {Cards} from "./Cards";
import {TableStudens} from "./TableStudens";

export const NavbarDocente = () => {
    let name = "Flores Toledo Victor Noe"
    let email = "20213tn059@utez.edu.mx"

    return (
        <div>
            <Navbar className="mb-5" style={{background: "#109175",color: "white"}}>
                <Container>
                    <Navbar.Brand href="/Login" style={{color:"#fff"}}> SICAE</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <NavDropdown title={name} id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Image
                                    style={{width:100, height:100}}
                                    src={PhotoPerfil}
                                    roundedCircle
                                    className="rounded mx-auto d-block"
                                />
                                <div className="text-center">
                                    <h1 style={{fontSize: 20}}>{name}</h1>
                                    <h1 style={{fontSize: 10}}>{email}</h1>
                                </div>
                                <div className="col-6 d-grid gap-2 mx-auto">
                                    <Link to="/"><Button className="btn btn-danger" type="submit">Cerrar Sesión</Button></Link>
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path='Home' element={<Cards/>}/>
                <Route path='list' element={<TableStudens/>}/>
            </Routes>
        </div>

    )
}
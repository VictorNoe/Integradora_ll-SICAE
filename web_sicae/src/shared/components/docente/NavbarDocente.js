
import {Route, Routes, useNavigate} from "react-router-dom";
import {Cards} from "./Cards";
import {TableStudens} from "./TableStudens";
import {useEffect} from "react";

export const NavbarDocente = () => {
    const navigation = useNavigate();

    useEffect(() => {
        let email = sessionStorage.getItem('email');
        if ( email === '' || email === null) {
            navigation("/")
        }
    },[]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route index element={<Cards/>}/>
                <Route path=":id" element={<TableStudens/>}/>
            </Routes>
        </div>
    )
}
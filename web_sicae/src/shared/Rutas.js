import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./components/docente/Login";
import {NotFount} from "./components/NotFount";
import {NavbarDocente} from "./components/docente/NavbarDocente";
import {NavbarAdmin} from "./components/Admin/Nav-Bar/NavbarAdmin";

export const Rutas = () => {

    return(
        <BrowserRouter>
            <Navigate />

            <Routes>
                <Route path='/' element={<Login/>}/>

                <Route path='/loginDte/*' element={<NavbarDocente/>}/>
                <Route path='loginDte' element={<Navigate to="/loginDte/Home"/>}/>

                <Route path='loginAdm/*' element={<NavbarAdmin/>}/>
                <Route path='loginAdm' element={<Navigate to="/loginAdm/Home"/>}/>
                
                <Route path='*' element={<NotFount/>}/>
            </Routes>
        </BrowserRouter>
    )
}
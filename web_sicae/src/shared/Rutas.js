import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./components/docente/Login";
import {NotFount} from "./components/NotFount";
import {NavbarDocente} from "./components/docente/NavbarDocente";
import {Cards} from "./components/docente/Cards";
import {NavbarAdmin} from "./components/Admin/Nav-Bar/NavbarAdmin";

export const Rutas = () => {

    return(
        <BrowserRouter>
            <Navigate />

            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Navigate to='/login'/>}/>

                <Route path='/loginDte/*' element={<NavbarDocente/>}/>
                <Route path='loginDte' element={<Navigate to="/loginDte/Home"/>}/>
                <Route path='loginDte' element={<Cards/>}/>

                <Route path='loginAdm/*' element={<NavbarAdmin/>}/>
                <Route path='loginAdm' element={<Navigate to="/loginAdm/Home"/>}/>
                
                <Route path='*' element={<NotFount/>}/>
            </Routes>
        </BrowserRouter>
    )
}
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../components/docente/Login";
import {NavbarDocente} from "../components/docente/NavbarDocente";
import {NavbarAdmin} from "../components/Admin/Nav-Bar/NavbarAdmin";
import {NotFount} from "../components/NotFount";

<Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/' element={<Navigate to='/login'/>}/>

    <Route path='/loginDte/*' element={<NavbarDocente/>}/>
    <Route path='loginDte' element={<Navigate to="/loginDte/Home"/>}/>

    <Route path='loginAdm/*' element={<NavbarAdmin/>}/>
    <Route path='loginAdm' element={<Navigate to="/loginAdm/Home"/>}/>

    <Route path='*' element={<NotFount/>}/>
</Routes>
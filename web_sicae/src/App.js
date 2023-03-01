import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import {NavbarDocente} from "./shared/components/docente/NavbarDocente";
import {Login} from "./shared/components/docente/Login";
export default function App() {
  return (
<<<<<<< HEAD
    <h1></h1>
=======
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="loginDte" element={<NavbarDocente/>}/>
      </Routes>
>>>>>>> Noe
  );
}


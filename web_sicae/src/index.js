import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./shared/components/Login";
import NavbarAdmin from './shared/components/Admin/Nav-Bar/NavbarAdmin.js';
import { Cards } from './shared/components/Admin/Cards/Cards.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <NavbarAdmin/>
      <Cards/>
  </React.StrictMode>
);

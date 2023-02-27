import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./shared/components/Login";
import { Form_Teacher } from './shared/components/Forms/Form_Teacher';
import { Form_Student } from './shared/components/Forms/Form_Student';
import { Form_Class } from './shared/components/Forms/Form_Class';
import { Cards } from './shared/components/Cards/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Cards/>
  </React.StrictMode>
);

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './components/App';
import Ocio from "./components/Ocio/Ocio";
import Invoices from "./components/Invoices";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="ocio" element={<Ocio />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
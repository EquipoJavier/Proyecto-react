import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './components/App';
import Ocio from "./components/Ocio/Ocio";
import Index from './components/Index/Index';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      <Route path="" element={<Index />} />
      <Route path="ocio" element={<Ocio />} />
      </Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
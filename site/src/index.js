import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ToastContainer} from 'react-toastify'
import Routes from './routes.js'
import 'react-toastify/dist/ReactToastify.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes/>    
    <ToastContainer/>
  </React.StrictMode>
);


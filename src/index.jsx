import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import AppClass from "./AppClass";
import DataComponents from './Components/Datacomponents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppClass myData ={DataComponents}/>   

  </React.StrictMode>
);
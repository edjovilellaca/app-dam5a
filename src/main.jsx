import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Usuarios } from './components/Usuarios.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usuarios  />
  </StrictMode>,
)


/* import App from './App.jsx' */

/* Todos los otros imports por si */
/* 
import Promesa from './functions/promesa1.jsx'
import Promesa2 from './functions/promesa2.jsx'
import Promesa3 from './functions/promesa3.jsx'
import Promesa4 from './functions/promesa4.jsx'
import MyFetchAPIs from './functions/MyFetchs.jsx'
import MyFetchPost from './functions/MyFetchPost.jsx'
import MyFetchPut from './functions/MyFetchPut.jsx' 
import MyFetchBlob from './functions/MyFetchBlob.jsx'
import MyDataTypes from './methods/MyDataTypes.jsx';
import MyObjects from './methods/MyObjects.jsx';
import { Contador } from './components/contador'
import { ContadorHook } from './components/ContadorHook'
import { Login } from './components/login.jsx'
*/
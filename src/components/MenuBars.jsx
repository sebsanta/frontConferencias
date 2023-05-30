import React from 'react';
import {Menubar} from 'primereact/menubar';
import {
   BrowserRouter as Router,
   Switch,
   Route, 
   link
 } from 'react-router-dom';
 import Cotizacion from './Cotizacion';


export default function MenuBars(){

  const items = [
    {
       label:'Inicio',
       icon:'pi pi-fw pi-home',
    },
    {
       label:'Conferencias',
       icon:'pi pi-fw pi-globe'
    },
    {
       label:'Conócenos',
       icon:'pi pi-fw pi-box'
    },
    {
       label:'Contacto',
       icon:'pi pi-fw pi-envelope',
    },
    {
      label:'Cotización',
      icon:'pi pi-fw pi-dollar',
   },
 ];

    return(
       <div className='card'>
            <Menubar model={items} className ="float-right" style={{alignItems: 'rigth'}}/>
       </div>
    )
}
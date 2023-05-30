import { render } from '@testing-library/react';
import React, {Component} from 'react';

export default class Navigation extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a class="navbar-brand" href="/inicio">Inicio</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="true" href="/conferencias">Conferencias</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="/cotizacion">Cotizaciones</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/conocenos">Conócenos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/contacto">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container-fluid float-right">
                <button className="btn btn-outline-dark float-right" href="/inicio" type=""></button>
                <a href="/login" className="btn btn-primary my-2 float-right">Salir</a>
              </div>
          </nav>
        )
    }
}

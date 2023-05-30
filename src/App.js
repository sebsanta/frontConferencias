import React, { useState, Component } from 'react';
import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  link
} from 'react-router-dom';
import Navigation from './components/Navigation';
import { ConferenciaService } from './service/ConferenciaService';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Panel} from 'primereact/panel';
import {Menubar} from 'primereact/menubar';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {InputNumber} from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import {Button} from 'primereact/button';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Inicio from '../src/components/Inicio.jsx';
import Conocenos from './components/Conocenos';
import Contacto from './components/Contacto';
import MenuBars from './components/MenuBars';
import Cotizacion from './components/Cotizacion';
import Login from './components/Login';






export default class App extends Component{

constructor(){

  super();
  this.state = {  visible: false, 
    conferencia : {
        id: null,
        nombreEvnt: '',
        fechaInicioEvnt: '',
        fechaTerminoEvnt: '',
       // idEstdEvnt: null,
        //idCtzn: null
      }
    };
  this.items = [
    {
     label   : 'Nuevo',
     icon    : 'pi pi-fw pi-plus',
     command :  () => {this.showSaveDialog()}
    },
    {
      label   : 'Editar',
      icon    : 'pi pi-fw pi-pencil',
      command :  () => {alert('Registro Editado!')}
    },
    {
      label   : 'Eliminar',
      icon    : 'pi pi-fw pi-trash',
      command :  () => {alert('Registro Eliminado!')}
    }
  ];

  this.confereniaService = new ConferenciaService();
  this.save = this.save.bind(this);
  this.footer = (
    <div>
       <Button label="Guardar" icon="pi pi-check" onClick={this.save} />
    </div>
  )
}

    componentDidMount(){
      this.confereniaService.getAll().then(data => {
        console.log(data);
        this.setState({conferencias : data});
      })
    }

    save(){
      this.confereniaService.save(this.state.conferencia).then(data => {
        console.log(data);
      });
    }

    render(){
      return(
        <Router>
          <Switch>
            <Route path="/conferencias">
              <Navigation></Navigation>
              <div style={{width: '100%', marginTop:'10px', margin: '10 auto'}}>
                <Panel header="Listado de evento de Conferencias">
                <Menubar model={this.items} style={{width: '40%' }}/>
                <br/>
                  <DataTable value={this.state.conferencias} paginator={true} rows="10">
                    <Column field="idEvnt" header="ID"></Column>
                    <Column field="nombreEvnt" header="Nombre Conferencia"></Column>
                    <Column field="fechaInicioEvnt" header="Inicio Conferencia"></Column>
                    <Column field="fechaTerminoEvnt" header="Término Conferencia"></Column>
                    <Column field="estadoEventoConferencia.nombreEstdEvnt" header="Estado Evento"></Column>
                    <Column field="cotizacion.montoCtzn" header="Monto Cotización"></Column>
                    <Column field="cotizacion.fechaCtzn" header="Fecha Cotización"></Column>
                  </DataTable>
                </Panel>
                <Dialog header="Crear Evento" visible={this.state.visible} style={{ width: '50%' }} footer={this.footer} modal={true} onHide={() => this.setState({visible: false})}>
                    <span className='field'>
                      <InputText style={{width: '100%'}} value={this.state.conferencia.nombreEvnt} id="nombreEvnt" onChange={(e) => {
                      let val = e.target.value;
                      this.setState(prevState => {
                        let conferencia = Object.assign({}, prevState.conferencia)
                        conferencia.nombreEvnt = val;
                        return {conferencia};
                      })}
                      }/>
                      <label htmlFor="nombreEvnt">Nombre Conferencia</label>
                    </span>
                    <span className='field'>
                      <Calendar style={{width: '100%'}} value={this.state.conferencia.fechaInicioEvnt} id="fechaInicioEvnt" onChange={(e) => {
                      let val = e.target.value;
                      this.setState(prevState => {
                        let conferencia = Object.assign({}, prevState.conferencia)
                        conferencia.fechaInicioEvnt = val;
                        return {conferencia};
                      })}
                      }/>
                      <label htmlFor="fechaInicioEvnt">Fecha Inicio Evento </label>
                    </span>
                    <span className='field'>
                      <Calendar style={{width: '100%'}} value={this.state.conferencia.fechaTerminoEvnt} id="fechaTerminoEvnt" onChange={(e) => {
                      let val = e.target.value;
                      this.setState(prevState => {
                        let conferencia = Object.assign({}, prevState.conferencia)
                        conferencia.fechaTerminoEvnt = val;
                        return {conferencia};
                      })}
                      }/>
                      <label htmlFor="fechaTerminoEvnt">Fecha Término Evento </label>
                    </span>
                    <span className='field'>
                      <InputNumber style={{width: '100%'}} value={this.state.conferencia.idEstdEvnt} id="idEstdEvnt" onValueChange={(e) => {
                        let val = e.target.value;
                        this.setState(prevState => {
                        let conferencia = Object.assign({}, prevState.conferencia)
                        conferencia.idEstdEvnt = val;
                        return {conferencia};
                      })}
                    }/>
                      <label htmlFor="idEstdEvnt">Id Estado Evento </label>
                    </span>
                    <span className='field'>
                      <InputNumber style={{width: '100%'}} value={this.state.conferencia.idCtzn} id="idCtzn" onValueChange={(e) => {
                        let val = e.target.value;
                        this.setState(prevState => {
                        let conferencia = Object.assign({}, prevState.conferencia)
                        conferencia.idCtzn = val;
                        return {conferencia};
                      })}
                      }/>
                      <label htmlFor="idCtzn">Id Cotización Evento </label>
                    </span>
                </Dialog>
                <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <img class="mb-2" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19"/>
        <small class="d-block mb-3 text-muted">&copy; 2017–2022</small>
      </div>
      <div class="col-6 col-md">
        <h5>Features</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Resources</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>


                </div>
              </Route>
              <Route path="/inicio" exact component={Inicio}>
                  <Inicio></Inicio>
              </Route>
              <Route path="/conocenos" exact component={Conocenos}>
                    <Conocenos></Conocenos>
              </Route>
              <Route path="/contacto" exact component={Contacto}>
                    <Contacto></Contacto>
              </Route>
              <Route path="/cotizacion" exact component={Cotizacion}>
                    <Cotizacion></Cotizacion>
              </Route>
              <Route path="/login" exact component={Login}>
                      <Login></Login>
              </Route>
          </Switch>
        </Router>
        
      );
    }

    showSaveDialog(){
        this.setState({
          visible : true
        })
    };

}

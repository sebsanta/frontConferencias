import React from 'react';
import  { useState, useRef, Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    link
  } from 'react-router-dom';
import {Toast} from 'primereact/toast';
import Navigation from './Navigation.jsx';
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import {Dialog} from 'primereact/dialog';
import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
import {InputNumber} from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import {Button} from 'primereact/button';
import MenuBars from '../components/MenuBars.jsx';
import { ConferenciaService } from '../service/ConferenciaService';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Panel} from 'primereact/panel';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';



export default class Cotizacion extends Component{





    constructor(){
        
        super();
        this.state = {  visible: false,
            cotizacion: {
                idCtzn: null,
                montoCtzn : null,
                descuentoCtzn: null,
                fechaCtzn: '',
            },
            
              selectedCotizacion : {
              }
          };

          this.Toast = React.createRef();

          this.items = [
            {
             label   : 'Nueva Cotización',
             icon    : 'pi pi-fw pi-plus',
             command :  () => {this.showSaveDialog()}
            },
            {
              label   : 'Editar',
              icon    : 'pi pi-fw pi-pencil',
              command :  () => {this.showEditDialog()}
            },
            {
              label   : 'Eliminar',
              icon    : 'pi pi-fw pi-trash',
              command :  () => {this.delete()}
            }
          ];

          this.conferenciaService = new ConferenciaService();
          this.save = this.save.bind(this);
          this.delete = this.delete.bind(this);
          this.footerSave = (
            <div>
               <Button label="Guardar" icon="pi pi-check" onClick={this.save}></Button>
            </div>
          );
      }

          componentDidMount(){
            this.conferenciaService.getCotizaciones().then(data => {
              //console.log(data);
              this.setState({cotizaciones : data});
            })
          }

          save(){
            this.conferenciaService.save(this.state.cotizacion).then(data => {
                this.setState({
                    visible:false
                });
                this.Toast.current.show({
                    severity: "success",
                    summary: "Atención!",
                    detail: "Se guardó el registro correctamente.",
                  });
                  this.conferenciaService.getCotizaciones().then(data => {
                    this.setState({cotizaciones : data});
                  })
            })
          };

          delete() {
            if(window.confirm("¿Realmente desea eliminar el registro?")) {
              this.conferenciaService.delete(this.state.selectedCotizacion.idCtzn).then(data => {
                this.Toast.current.show({severity: 'success', summary: 'Atención!', detail: 'Se eliminó el registro correctamente.'});
                this.conferenciaService.getCotizaciones().then(data => this.setState({cotizaciones: data}));
              });
            }
          }
      
          render(){
            return(
              <div>
              <Router>
                <Switch>
                  <Route path="/cotizacion">
                    <Navigation></Navigation>
                      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                          <h1 class="display-4 fw-normal">Precios</h1>
                          <p class="fs-5 text-muted">Cotiza con nosotros las mejores opciones de eventos de conferencias.</p>
                      </div>


  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Start-UP</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">$15.000<small class="text-muted fw-light">/Dia</small></h3>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Reuniones/ 5 personas</li>
              <li>Snacks para reuniones</li>
              <li>Proyector</li>
              <li>Asistencia técnica</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Empresas</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">$150.000<small class="text-muted fw-light">/mes</small></h3>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Reuniones/15 personas</li>
              <li>Snacks/Café para reuniones</li>
              <li>Proyector/Computador</li>
              <li>Asistencia técnica</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-white bg-primary border-primary">
            <h4 class="my-0 fw-normal">Corporativo</h4>
          </div>
          <div class="card-body">
            <h3 class="card-title pricing-card-title">$500.000<small class="text-muted fw-light">/mes</small></h3>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Reuniones/ 30 personas</li>
              <li>Snacks/Café/Transporte para reuniones</li>
              <li>Proyector/Computador/Asistente</li>
              <li>Asistencia/Técnica y comercial</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>




                    <div style={{width: '100%', marginTop:'10px', margin: '10 auto'}}>
                      <Panel header="Datos de Cotizaciones">
                      <Menubar model={this.items} style={{width: '40%' }}/>
                      <br/>
                        <DataTable value={this.state.cotizaciones} paginator={true} rows="10" selectionMode="single" selection={this.state.selectedCotizacion} onSelectionChange={e => this.setState({selectedCotizacion : e.value})}>
                          <Column field="idCtzn" header="ID"></Column>
                          <Column field="montoCtzn" header="Monto Cotización"></Column>
                          <Column field="descuentoCtzn" header="Descuento"></Column>
                          <Column field="fechaCtzn" header="Fecha Cotización"></Column>
                        </DataTable>
                      </Panel>
                      <Dialog header="Crear Cotización" visible={this.state.visible} style={{ width: '50%' }} footer={this.footerSave} modal={true} onHide={() => this.setState({visible: false})}>
                      <form id="cotizacion-form">
                      <span className='field'>
                      <InputNumber style={{width: '100%'}} value={this.state.cotizacion.montoCtzn} id="montoCtzn" onValueChange={(e) => {
                        let val = e.target.value;
                        this.setState(prevState => {
                        let cotizacion = Object.assign({}, prevState.cotizacion)
                        cotizacion.montoCtzn = val;
                        return {cotizacion};
                      })}
                    }/>
                    <label htmlFor="montoCtzn">Monto Cotización</label>
                    </span>
                    <span className='field'>
                      <InputNumber style={{width: '100%'}} value={this.state.cotizacion.descuentoCtzn} id="descuentoCtzn" onValueChange={(e) => {
                        let val = e.target.value;
                        this.setState(prevState => {
                        let cotizacion = Object.assign({}, prevState.cotizacion)
                        cotizacion.descuentoCtzn = val;
                        return {cotizacion};
                      })}
                    }/>
                    <label htmlFor="descuentoCtzn">Descuento</label>
                    </span>
                    <span className='field'>
                      <Calendar style={{width: '100%'}} value={this.state.cotizacion.fechaCtzn} id="fechaCtzn" onChange={(e) => {
                      let val = e.target.value;
                      this.setState(prevState => {
                        let cotizacion = Object.assign({}, prevState.cotizacion)
                        cotizacion.fechaCtzn = val;
                        return {cotizacion};
                      })}
                      }/>
                      <label htmlFor="fechaCtzn">Fecha Cotización </label>
                    </span>
                    </form>
                </Dialog>
                <Toast ref={this.Toast}></Toast>
                </div>
            </Route>
        </Switch>
        </Router>
        
    
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
        )
       
    }

    showSaveDialog(){
        this.setState({
          visible : true,
          cotizacion: {
            idCtzn: null,
            montoCtzn : null,
            descuentoCtzn: null,
            fechaCtzn: '',
          }
        })
        document.getElementById('cotizacion-form').reset();
    };
   
  showEditDialog() {
    this.setState({
      visible : true,
      cotizacion : {
        idCtzn: this.state.selectedCotizacion.idCtzn,
        montoCtzn: this.state.selectedCotizacion.montoCtzn,
        descuentoCtzn: this.state.selectedCotizacion.descuentoCtzn,
        fechaCtzn: this.state.selectedCotizacion.fechaCtzn,
      }
    })
  }

   
}

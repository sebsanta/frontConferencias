import axios from 'axios';

export class ConferenciaService{

    baseUrl = "http://localhost:8080/eventoConferencia/";
    cotizacion = "http://localhost:8080/cotizacion/";

    getAll(){
        return axios.get(this.baseUrl).then(res=> res.data);
    }

    getCotizaciones(){
        return axios.get(this.cotizacion).then(res=> res.data);
    }

    //save(conferencia){
    //    return axios.post(this.baseUrl + "save", conferencia).then(res => res.data);
    //}

    save(cotizacion){
        return axios.post(this.cotizacion, cotizacion).then(res => res.data);
    }

    delete(idCtzn){
        return axios.delete(this.cotizacion+idCtzn).then(res => res.data);
    }
}
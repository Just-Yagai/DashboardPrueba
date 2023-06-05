import { Component, OnInit } from '@angular/core';
import { SecuenciasService } from './secuencias.service';


@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent implements OnInit {

  public Secuencias: any = [];

  constructor( private getServices: SecuenciasService){}

  ngOnInit(){}

  // Modal Secuencias
  fechaRegistroModal2: string = '';
  fechaDesdeModal: string = '';
  fechaHastaModal: string = '';

  setFechaRegistro2(fechaRegistro2: string) {
    this.fechaRegistroModal2 = fechaRegistro2;
  }

  setFechaDesdeModal(fechaDesde: string) {
    this.fechaDesdeModal = fechaDesde;
  }

  setFechaHastaModal(fechaHasta: string) {
    this.fechaHastaModal = fechaHasta;
  }
  // end modal
}

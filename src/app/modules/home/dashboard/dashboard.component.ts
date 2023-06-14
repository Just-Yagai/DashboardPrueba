import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  rnc: string;
  razonSocial: string;
  tipoCertificacion: any = [];
  selectedTipoCertificacion: string | null;
  isSelectDisabled: boolean = true;
  datosTipo: any = [];

  datos: any[] = [];



  // datos: Marcas[] = [] && prueba[] = [];
  
  // @Input() filterMarcas: 

  constructor(private getDashboard: DashboardService) {
  }

  ngOnInit() {}

  buscarRNC(): void {
    if (!this.rnc) {
      this.rncNoIntroducido();
      return;
    }
  
    this.getDashboard.getRNC(this.rnc).subscribe((data) => {
      if (data) {
        this.actualizarDatosRNCValidos(data);
        this.RNCValido();
      } else {
        this.actualizarDatosRNCInvalidos();
        this.RNCInvalido();
      }
    });
  }
  
  rncNoIntroducido(): void {
    Swal.fire({
      icon: 'question',
      text: 'Aún no se ha introducido el RNC.',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }
  
  actualizarDatosRNCValidos(data: any): void {
    this.razonSocial = data.razonSocial;
    this.tipoCertificacion = data.tipo_certificacion;
    this.isSelectDisabled = false;
  
    const tipoEmisor = this.tipoCertificacion.find((tipo: any) => tipo.tipo === 'Emisor');
    const tipoProveedor = this.tipoCertificacion.find((tipo: any) => tipo.tipo === 'Proveedor');
  
    this.selectedTipoCertificacion = tipoEmisor ? 'Emisor' : tipoProveedor ? 'Proveedor' : null;
    const tipoSeleccionado = tipoEmisor || tipoProveedor;
    this.datosTipo.estado = tipoSeleccionado ? tipoSeleccionado.estado : '';
    this.datosTipo.inicio_postulacion = tipoSeleccionado ? tipoSeleccionado.inicio_postulacion : '';
    this.datosTipo.finalizacion_postulacion = tipoSeleccionado ? tipoSeleccionado.finalizacion_postulacion : '';
  }
  
  RNCValido(): void {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'El RNC ha sido ingresado correctamente.',
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }
  
  actualizarDatosRNCInvalidos(): void {
    this.rnc = '';
    this.razonSocial = '';
    this.tipoCertificacion = [];
    this.isSelectDisabled = true;
  }
  
  RNCInvalido(): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Se ha ingresado un RNC inválido.',
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }

  getDatosTipoCertificacion() {
    this.datosTipo = this.tipoCertificacion.find(
      (tipoCert: { tipo: string | null }) =>
        tipoCert.tipo === this.selectedTipoCertificacion
    );
  }

  limpiarCampos() {
    if (!this.rnc) {
      this.razonSocial = '';
      this.tipoCertificacion = [];
      this.selectedTipoCertificacion = null;
      this.isSelectDisabled = true;
      this.datosTipo.estado = '';
      this.datosTipo.inicio_postulacion = '';
      this.datosTipo.finalizacion_postulacion = '';
    }
  } 
}

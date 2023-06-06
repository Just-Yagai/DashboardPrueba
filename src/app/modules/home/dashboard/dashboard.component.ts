import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rnc!: string;
  razonSocial!: string;
  tipoCertificacion: any = [];
  selectedTipoCertificacion!: string | null;
  isSelectDisabled: boolean = true;
  datosTipo: any = [];
  rncInvalido: boolean = false;
  
  constructor( private getDashboard: DashboardService){}

  ngOnInit(){}

  buscarRNC(){
    if (!this.rnc) {
      Swal.fire({
        icon: 'question',
        // title: '¿Agregaste un RNC?',
        text: 'Aún no se ha introducido el RNC.'
      });
      return;
    }

    this.getDashboard.getRNC(this.rnc).subscribe(data => {
      if (data) {
        this.razonSocial = data.razonSocial;
        this.tipoCertificacion = data.tipo_certificacion;
        this.selectedTipoCertificacion = null; 
        this.isSelectDisabled = false; 
        Swal.fire({
          icon: 'success',
          title: 'Success',
          // text: 'El RNC está correcto.'
          // text: 'El número del RNC es correcto.',
          text: 'El RNC ha sido ingresado correctamente.',
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false
        });
        if (this.tipoCertificacion.length > 0) {
          this.selectedTipoCertificacion = this.tipoCertificacion[0].selected;
        }    
      } else {
        this.rnc = '';
        this.razonSocial = '';
        this.tipoCertificacion = []; 
        this.selectedTipoCertificacion = null; 
        this.isSelectDisabled = true;
        Swal.fire({
          icon: 'error',
          title: 'Error',
          // text: 'El RNC es inválido.',
          // text: 'El RNC no es válido.',
          text: 'Se ha ingresado un RNC inválido.',
          // text: 'El número del RNC no es válido.',
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false
        });
      }

      this.datosTipo.estado = '';
      this.datosTipo.inicio_postulacion = '';
      this.datosTipo.finalizacion_postulacion = '';
    });
  }

  getDatosTipoCertificacion() {
    this.datosTipo = this.tipoCertificacion.find((tipoCert: { tipo: string | null; }) => tipoCert.tipo === this.selectedTipoCertificacion);
  }  

  limpiarCampos(){
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

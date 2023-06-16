import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import Swal from 'sweetalert2';
import { MarcasService } from 'src/app/services/marcas.service';
import { DelegacionesService } from 'src/app/services/delegaciones.service';
import { SecuenciasService } from 'src/app/services/secuencias.service';
import { RncService } from 'src/app/services/rnc.service';
import { ModelsFilter, ModelsGeneral } from 'src/app/core';
import { AmbienteService } from '../../components/select/services/ambiente.service';
import { CanalService } from '../../components/select/services/canal.service';

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

  // Datos: Marcas, Delegaciones
  datosMarcas: ModelsGeneral[];
  datosDelegaciones: ModelsGeneral[];
  datosSecuencias: ModelsGeneral[];
  datosRncEstado: ModelsGeneral[];

  ambienteID: number;
  canalID: number;

  // Select Option
  datosAmbientes: ModelsFilter[];
  datosCanal: ModelsFilter[];
  id: number;
  nombre: string;

  constructor(
    private getDashboard: DashboardService,
    private getMarcasServices: MarcasService,
    private getDelegacionesServices: DelegacionesService,
    private getSecuenciasServices: SecuenciasService,
    private getRncEstadoServices: RncService,
    private getAmbienteServices: AmbienteService,
    private getCanalServices: CanalService
    ) {}

  ngOnInit() {}

  buscarRNC() {
    if (!this.rnc) {
      this.rncNoIntroducido();
      return;
    }
  
    this.getDashboard.getRNC(this.rnc).subscribe((data) => {
      if (data) {
        this.actualizarDatosRNCValidos(data);
        this.RNCValido();
        this.obtenerMarcas();
        this.obtenerAmbiente();
        this.obtenerCanal();
        this.obtenerDelegaciones();
        this.obtenerSecuencias();
        this.obtenerRncEstado();
      } else {
        this.actualizarDatosRNCInvalidos();
        this.RNCInvalido();
      }
    });
  }

  // obtenerMarcas(){
  //   this.getMarcasServices.getMarcas(this.rnc)
  //   .subscribe((data) => {
  //       this.datosMarcas = data;
  //       console.log(data);
  //   });
  // }

  obtenerMarcas(){
    this.getMarcasServices.getMarcas(this.rnc, this.ambienteID, this.canalID)
        .subscribe((data) => {
          this.datosMarcas = data;
          // console.log(data);
    });
  }

  obtenerDelegaciones(){
    this.getDelegacionesServices.getDelegaciones(this.rnc, this.ambienteID, this.canalID)
        .subscribe((data) => {
          this.datosDelegaciones = data;
          // console.log(data);
        })
  }

  obtenerSecuencias(){
    this.getSecuenciasServices.getSecuencias(this.rnc, this.ambienteID, this.canalID)
        .subscribe((data) => {
          this.datosSecuencias = data;
          // console.log(data);
        })
  }

  obtenerRncEstado(){
    this.getRncEstadoServices.getRncEstado(this.rnc, this.ambienteID, this.canalID)
        .subscribe((data) => {
          this.datosRncEstado = data;
          console.log(data);
        })
  }

  obtenerAmbiente(){
    this.getAmbienteServices.getAmbiente()
        .subscribe((data) => {
          this.datosAmbientes = data;
          // console.log(data);
        });
  }

  obtenerCanal(){
    this.getCanalServices.getCanal()
        .subscribe((data) => {
          this.datosCanal = data;
          // console.log(data);
        });
  }
  
  rncNoIntroducido() {
    Swal.fire({
      icon: 'question',
      text: 'Aún no se ha introducido el RNC.',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }
  
  actualizarDatosRNCValidos(data: any) {
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
  
  RNCValido() {
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
  
  actualizarDatosRNCInvalidos() {
    this.rnc = '';
    this.razonSocial = '';
    this.tipoCertificacion = [];
    this.datosTipo = [];
    this.isSelectDisabled = true;
    this.datosMarcas = [];
    this.datosDelegaciones = [];
    this.datosSecuencias = [];
  }
  
  RNCInvalido() {
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
      this.datosMarcas = [];
      this.datosDelegaciones = [];
      this.datosSecuencias = [];
      this.datosAmbientes = [];
      this.datosCanal = [];
    }
  } 
}

import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import Swal from 'sweetalert2';
import { MarcasService } from 'src/app/services/marcas.service';
import { DelegacionesService } from 'src/app/services/delegaciones.service';
import { SecuenciasService } from 'src/app/services/secuencias.service';
import { RncService } from 'src/app/services/rnc.service';
import { ModelFilter, ModelsGeneral } from 'src/app/core';
import { AmbienteService } from '../../components/select/services/ambiente.service';
import { CanalService } from '../../components/select/services/canal.service';
import { SelectComponent } from '../../components/select/select.component';
import { ModeloGeneral } from 'src/app/core/models/modelsGeneral2';
import { modelMarcas } from 'src/app/core/models/marcas';
import { modelDelegaciones } from 'src/app/core/models/delegaciones';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  @ViewChild(SelectComponent) selectComponent: SelectComponent;
  
  datosModelos: ModeloGeneral = new ModeloGeneral();

  rnc: string;
  razonSocial: string;
  tipoCertificacion: any = [];
  selectedTipoCertificacion: string | null;
  isSelectDisabled: boolean = true;
  datosTipo: any = [];

  filtrado: ModelFilter = new ModelFilter('',0,'',0,0);

  // Datos: Marcas, Delegaciones
  datosMarcas: modelMarcas[];
  datosDelegaciones: modelDelegaciones[];
  datosSecuencias: ModelsGeneral[];
  datosRncEstado: ModelsGeneral[];

  // Select Option
  id: string;
  nombre: string;

  constructor(
    private getDashboard: DashboardService,
    private getMarcasServices: MarcasService,
    private getDelegacionesServices: DelegacionesService,
    private getSecuenciasServices: SecuenciasService,
    private getRncEstadoServices: RncService
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
        this.filtrado.rnc = this.rnc;
        this.filtrado.ambienteID = 1;
        this.filtrado.canalID = 1;
        this.obtenerMarcas(this.filtrado);
        this.obtenerDelegaciones(this.filtrado);
        // this.selectComponent.obtenerMarcasID(this.rnc);
        this.filtrado.rnc = this.rnc;
        // this.selectComponent.obtenerDelegacionesID(this.rnc);
        // this.selectComponent.obtenerAmbiente();
        // this.selectComponent.obtenerCanal();
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

  obtenerMarcas(filtrado: ModelFilter){
    this.getMarcasServices.getMarcas(filtrado.rnc, filtrado.ambienteID, filtrado.canalID)
        .subscribe((data) => {
          this.datosModelos.MarcasM = data;
    });
  }

  obtenerDelegaciones(filtrado: ModelFilter){
    this.getDelegacionesServices.getDelegaciones(filtrado.rnc, filtrado.ambienteID, filtrado.canalID)
        .subscribe((data) => {
          this.datosModelos.DelegacionesM = data;
        });
  }

  // obtenerSecuencias(){
  //   this.getSecuenciasServices.getSecuencias(this.rnc, this.ambienteID, this.canalID)
  //       .subscribe((data) => {
  //         this.datosSecuencias = data;
  //         // console.log(data);
  //       })
  // }

  // obtenerRncEstado(){
  //   this.getRncEstadoServices.getRncEstado(this.rnc, this.ambienteID, this.canalID)
  //       .subscribe((data) => {
  //         this.datosRncEstado = data;
  //         // console.log(data);
  //       })
  // }


  
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
    this.datosModelos.MarcasM = [];
    this.datosModelos.DelegacionesM = [];
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
      this.datosModelos.MarcasM = [];
      this.datosModelos.DelegacionesM = [];
      this.datosSecuencias = [];
    }
  } 

  // actualizarDatosMarcas(datos: modelMarcas[]) {
  //   this.datosModelos.MarcasM = datos;
  //   this.datosMarcas = datos;
  // }

  // actualizarDatosDelegacion(datos: modelDelegaciones[]) {
  //   this.datosModelos.DelegacionesM = datos;
  //   this.datosModelos.DelegacionesM = datos;
  // }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AmbienteService } from './services/ambiente.service';
import { CanalService } from './services/canal.service';
import { MarcasService } from '../../../services/marcas.service';
import { DelegacionesService } from '../../../services/delegaciones.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() e_CF: boolean;
  @Input() tablaMarcas: boolean;
  @Input() tablaDelegaciones: boolean;
  @Input() tablaSecuencias: boolean;
  @Input() tablaRNC: boolean;
  
  // dataAmbientes: RespAmbiente[] = [];
  // dataCanal: RespCanal[] = [];

  dataMarcas: any[] = [];
  dataDelegaciones: any[] = [];

  selectedAmbiente: number;
  selectedCanal: number;

  filteredMarcas: any[];
  filteredDelegaciones: any[];
  
  constructor( 
    private getMarcasServices: MarcasService,
    private getDelegacionesServices: DelegacionesService) {
    this.e_CF = false;
    // this.tablaMarcas = false;
  }

  ngOnInit() {
    this.obtenerMarcas();
    this.obtenerDelegaciones();
  }

  obtenerMarcas(){
    this.getMarcasServices.getMarcas()
        .subscribe((data) => {
          this.dataMarcas = data;
        })
  }

  obtenerDelegaciones(){
    this.getDelegacionesServices.getDelegaciones()
        .subscribe((data) => {
          this.dataDelegaciones = data;
        })
  }

  onAmbienteChange(value: string) {
    this.selectedAmbiente = parseInt(value);
    this.filterMarcas();
    this.filterDelegaciones();
  }
  
  onCanalChange(value: string) {
    this.selectedCanal = parseInt(value);
    this.filterMarcas();
    this.filterDelegaciones();
  }

  filterMarcas() {
    if (this.selectedAmbiente && this.selectedCanal) {
      let filteredMarcas = this.dataMarcas.filter((marca) => {
        return (
          marca.AmbienteID === this.selectedAmbiente && marca.CanalID === this.selectedCanal
        );
      });
  
      return filteredMarcas;
    } else {
      return [];
    }
  }    

  filterDelegaciones() {
    if (this.selectedAmbiente && this.selectedCanal) {
      let filteredDelegaciones = this.dataDelegaciones.filter((delegaciones) => {
        return (
          delegaciones.AmbienteID === this.selectedAmbiente && delegaciones.CanalID === this.selectedCanal
        );
      });
  
      return filteredDelegaciones;
    } else {
      return [];
    }
  } 
}

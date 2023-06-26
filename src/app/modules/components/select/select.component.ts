import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AmbienteService } from './services/ambiente.service';
import { CanalService } from './services/canal.service';
import { ModelFilter, ModelsGeneral } from 'src/app/core';
import { MarcasService } from 'src/app/services/marcas.service';
import { DelegacionesService } from 'src/app/services/delegaciones.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() e_CF: boolean;
  @Input() selectAmbiente: ModelFilter[];
  @Input() selectCanal: ModelFilter[];
  @Input() SelectDisabled: boolean;
  datosAmbientes: ModelFilter[];
  datosCanal: ModelFilter[];
  // @Input() filterDataMarcas: ModelsGeneral[] = [];

  @Output() datosFiltradosMarcas = new EventEmitter<ModelsGeneral[]>();
  @Output() datosFiltradosDelegaciones = new EventEmitter<ModelsGeneral[]>();
  // @Output() obtenerMarcasIDHijo: EventEmitter<void> = new EventEmitter<void>();

  pruebaMarcas: ModelsGeneral[] = [];
  pruebaDelegaciones: ModelsGeneral[] = [];
  ambienteID: number;
  canalID: number;
  rnc: string;
  // id: ModelsFilter;
  // rnc: string;
  @Input() filterRNC: string;
  @Input() filterAmbienteID: number;
  @Input() filterCanalID: number;

  constructor(private getMarcasServices: MarcasService,
              private getDelegacionesServices: DelegacionesService,
              private getAmbienteServices: AmbienteService,
              private getCanalServices: CanalService) {
    this.e_CF = false;
  }

  ngOnInit() {
    // this.obtenerMarcasID();
    this.obtenerDelegacionesID();
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

  obtenerMarcasID(rnc: string) {
    this.getMarcasServices.getMarcasSelect(rnc)
      .subscribe((data) => {
        this.pruebaMarcas = data;
      });
  }

  obtenerDelegacionesID() {
    this.getDelegacionesServices.getDelegacionesSelect()
      .subscribe((data) => {
        this.pruebaDelegaciones = data;
      });
  }

  onAmbienteChange(value: string) {
    this.ambienteID = parseInt(value);
    this.filterMarcas();
    this.filterDelegaciones();
  }
  
  onCanalChange(value: string) {
    this.canalID = parseInt(value);
    this.filterMarcas();
    this.filterDelegaciones();
  }

  filterMarcas() {
    let filteredMarcas: ModelsGeneral[] = [];
  
    if (this.ambienteID && this.canalID) {
      filteredMarcas = this.pruebaMarcas.filter((marca: { AmbienteID: number; CanalID: number; }) => marca.AmbienteID === this.ambienteID && marca.CanalID === this.canalID);
    } else if (this.ambienteID) {
      filteredMarcas = this.pruebaMarcas.filter((marca: { AmbienteID: number; }) => marca.AmbienteID === this.ambienteID);
    } else if (this.canalID) {
      filteredMarcas = this.pruebaMarcas.filter((marca: { CanalID: number; }) => marca.CanalID === this.canalID);
    }
    this.datosFiltradosMarcas.emit(filteredMarcas);
    console.log(filteredMarcas);
  }

  // filterMarcas() {
  //   let filteredMarcas: ModelsGeneral[] = [];
  
  //   if (this.ambienteID && this.canalID && this.rnc) {
  //     filteredMarcas = this.pruebaMarcas.filter((marca: { AmbienteID: number; CanalID: number; rnc: string; }) => marca.AmbienteID === this.ambienteID && marca.CanalID === this.canalID && marca.rnc === this.rnc);
  //   } else if (this.ambienteID) {
  //     filteredMarcas = this.pruebaMarcas.filter((marca: { AmbienteID: number; }) => marca.AmbienteID === this.ambienteID);
  //   } else if (this.canalID) {
  //     filteredMarcas = this.pruebaMarcas.filter((marca: { CanalID: number; }) => marca.CanalID === this.canalID);
  //   } else if (this.rnc) {
  //     filteredMarcas = this.pruebaMarcas.filter((marca: { rnc: string; }) => marca.rnc === this.rnc);
  //   }
  //   this.datosFiltradosMarcas.emit(filteredMarcas);
  //   console.log(filteredMarcas);
  // }

  filterDelegaciones() {
    let filteredDelegaciones: ModelsGeneral[] = [];
      
    if (this.ambienteID && this.canalID) {
      filteredDelegaciones = this.pruebaDelegaciones.filter(delegaciones => delegaciones.AmbienteID === this.ambienteID && delegaciones.CanalID === this.canalID);
    } else if (this.ambienteID) {
      filteredDelegaciones = this.pruebaDelegaciones.filter(delegaciones => delegaciones.AmbienteID === this.ambienteID);
    } else if (this.canalID) {
      filteredDelegaciones = this.pruebaDelegaciones.filter(delegaciones => delegaciones.CanalID === this.canalID);
    }
    this.datosFiltradosDelegaciones.emit(filteredDelegaciones);
  }
  
}

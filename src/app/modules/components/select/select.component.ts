import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { AmbienteService } from './services/ambiente.service';
import { CanalService } from './services/canal.service';
import { ModelFilter, ModelsGeneral } from 'src/app/core';
import { MarcasService } from 'src/app/services/marcas.service';
import { DelegacionesService } from 'src/app/services/delegaciones.service';
import { modelDelegaciones } from 'src/app/core/models/delegaciones';
import { modelMarcas } from 'src/app/core/models/marcas';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() e_CF: boolean;
  @Input() SelectDisabled: boolean;
  datosAmbientes: any[];
  datosCanal: any[];
  @Input() filtro: ModelFilter;
  // @Input() filterDataMarcas: ModelsGeneral[] = [];

  @Output() datosFiltradosMarcas = new EventEmitter<modelMarcas[]>();
  @Output() datosFiltradosDelegaciones = new EventEmitter<modelDelegaciones[]>();
  // @Output() obtenerMarcasIDHijo: EventEmitter<void> = new EventEmitter<void>();

  @Output() filtrarMarcas = new EventEmitter<ModelFilter>();

  pruebaMarcas: modelMarcas[] = [];
  pruebaDelegaciones: modelDelegaciones[] = [];

  ambienteID: number;
  canalID: number;
  rnc: string;

  // id: ModelsFilter;
  // rnc: string;

  constructor(private getMarcasServices: MarcasService,
    private getDelegacionesServices: DelegacionesService,
    private getAmbienteServices: AmbienteService,
    private getCanalServices: CanalService) {
    this.e_CF = false;
  }

  ngOnInit() {
    this.obtenerAmbiente();
    this.obtenerCanal(); 
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('cambio generado del onchange'+ JSON.stringify(changes));
    console.log(JSON.stringify(this.filtro));
    if (this.filtro != undefined && this.filtro.rnc != undefined && this.filtro.rnc.length > 0) {
      // this.filtro != undefined;
      // this.obtenerMarcasID(this.filtro.rnc);
    this.filtrarMarcas.emit(this.filtro);
    }
  }

  obtenerAmbiente() {
    this.getAmbienteServices.getAmbiente()
      .subscribe((data) => {
        this.datosAmbientes = data;
        // console.log(data);
      });
  }

  obtenerCanal() {
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

  obtenerDelegacionesID(rnc: string) {
    this.getDelegacionesServices.getDelegacionesSelect(rnc)
      .subscribe((data) => {
        this.pruebaDelegaciones = data;
      });
  }

  onAmbienteChange(value: string) {
    this.ambienteID = parseInt(value);
    this.filtro.ambienteID = this.ambienteID;
    // this.filterMarcas();
    this.filtrarMarcas.emit(this.filtro);
    console.log(this.filtro.rnc);
  }

  onCanalChange(value: string) {
    this.canalID = parseInt(value);
    this.filtro.canalID = this.canalID;
    // this.filterMarcas();
    this.filtrarMarcas.emit(this.filtro);
  }

  // filterMarcas() {
  //   let filteredMarcas: modelMarcas[] = [];

  //   if (this.ambienteID && this.canalID) {
  //     filteredMarcas = this.pruebaMarcas.filter((marca: modelMarcas) => {
  //       return marca.AmbienteID === this.ambienteID && marca.CanalID === this.canalID;
  //     });
  //   } else if (this.ambienteID) {
  //     filteredMarcas = this.pruebaMarcas.filter((marca: modelMarcas) => {
  //       return marca.AmbienteID === this.ambienteID;
  //     });
  //   } else if (this.canalID) {
  //     filteredMarcas = this.pruebaMarcas.filter((marca: modelMarcas) => {
  //       return marca.CanalID === this.canalID;
  //     });
  //   }

  //   this.datosFiltradosMarcas.emit(filteredMarcas);
  //   console.log(filteredMarcas);
  // }

  // filterDelegaciones() {
  //   let filteredDelegaciones: modelDelegaciones[] = [];

  //   if (this.ambienteID && this.canalID) {
  //     filteredDelegaciones = this.pruebaDelegaciones.filter((delegaciones: modelDelegaciones) => {
  //       return delegaciones.AmbienteID === this.ambienteID && delegaciones.CanalID === this.canalID;
  //     });
  //   } else if (this.ambienteID) {
  //     filteredDelegaciones = this.pruebaDelegaciones.filter((delegaciones: modelDelegaciones) => {
  //       return delegaciones.AmbienteID === this.ambienteID;
  //     });
  //   } else if (this.canalID) {
  //     filteredDelegaciones = this.pruebaDelegaciones.filter((delegaciones: modelDelegaciones) => {
  //       return delegaciones.CanalID === this.canalID;
  //     });
  //   }

  //   this.datosFiltradosDelegaciones.emit(filteredDelegaciones);
  //   console.log(filteredDelegaciones);
  // }

}

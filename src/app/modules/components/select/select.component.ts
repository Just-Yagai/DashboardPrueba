import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AmbienteService } from './services/ambiente.service';
import { CanalService } from './services/canal.service';
import { ModelsGeneral } from 'src/app/core';
import { MarcasService } from 'src/app/services/marcas.service';
import { DelegacionesService } from 'src/app/services/delegaciones.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() e_CF: boolean;
  @Input() selectAmbiente: any[];
  // @Input() selectCanal: any[];
  @Input() SelectDisabled: boolean;
  @Input() dataMarcas: ModelsGeneral[] = [];

  @Output() datosFiltradosMarcas = new EventEmitter<ModelsGeneral[]>();
  @Output() datosFiltradosDelegaciones = new EventEmitter<ModelsGeneral[]>();

  pruebaMarcas: ModelsGeneral[] = [];
  pruebaDelegaciones: ModelsGeneral[] = [];
  ambienteID: number;
  canalID: number;

  constructor(private getMarcasServices: MarcasService,
              private getDelegacionesServices: DelegacionesService) {
    this.e_CF = false;
  }

  ngOnInit() {
    this.obtenerMarcasID();
    this.obtenerDelegacionesID();
  }

  obtenerMarcasID() {
    this.getMarcasServices.getMarcasSelect()
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
;  }
  
  onCanalChange(value: string) {
    this.canalID = parseInt(value);
    this.filterMarcas();
    this.filterDelegaciones();
  }

  filterMarcas() {
    let filteredMarcas: ModelsGeneral[] = [];
  
    if (this.ambienteID && this.canalID) {
      filteredMarcas = this.pruebaMarcas.filter(marca => marca.AmbienteID === this.ambienteID && marca.CanalID === this.canalID);
    } else if (this.ambienteID) {
      filteredMarcas = this.pruebaMarcas.filter(marca => marca.AmbienteID === this.ambienteID);
    } else if (this.canalID) {
      filteredMarcas = this.pruebaMarcas.filter(marca => marca.CanalID === this.canalID);
    }
    this.datosFiltradosMarcas.emit(filteredMarcas);
  }

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

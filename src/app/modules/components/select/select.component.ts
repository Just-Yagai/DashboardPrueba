import { Component, Input, OnInit } from '@angular/core';
import { AmbienteService } from './services/ambiente.service';
import { CanalService } from './services/canal.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() e_CF: boolean;
  @Input() selectAmbiente: any[];
  @Input() selectCanal: any[];
  @Input() SelectDisabled: boolean;

  // datosAmbientes: any[] = [];
  // datosCanal: any[];

  ambienteID: number;
  canalID: number;

  constructor(
    private getAmbienteServices: AmbienteService,
    private getCanalServices: CanalService
    ) {
    this.e_CF = false;
  }

  ngOnInit() {
  }

  // ambiente = this.datosAmbientes.reduce(
  //   (result, current) => result.some((c: any) => c === current.ambienteID) ? result : [...result, current.ambienteID], []
  // );

  // obtenerAmbiente(){
  //   this.getAmbienteServices.getAmbiente(this.ambienteID)
  //       .subscribe((data) => {
  //         this.datosAmbientes = data;
  //       });
  // }

  // obtenerCanal(){
  //   this.getCanalServices.getCanal(this.canalID)
  //       .subscribe((data) => {
  //         this.datosCanal = data;
  //       });
  // }
}

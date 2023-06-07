import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AmbienteService } from './services/ambiente.service';
import { CanalService } from './services/canal.service';
import { RespAmbiente } from 'src/app/core/interface/ambiente.interface';
import { RespCanal } from 'src/app/core/interface/canal.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() e_CF: boolean;
  dataAmbientes: RespAmbiente[] = [];
  dataCanal: RespCanal[] = [];

  constructor(private getAmbienteService: AmbienteService,
    private getCanalService: CanalService) {
    this.e_CF = false;
  }

  ngOnInit() {
    this.obtenerAmbiente();
    this.obtenerCanal();
  }

  obtenerAmbiente(){
    this.getAmbienteService.getAmbiente()
        .subscribe((data: RespAmbiente[]) => {
          this.dataAmbientes = data;
        });
  }

  obtenerCanal() {
    this.getCanalService.getCanal()
    .subscribe((data: RespCanal[]) => {
      this.dataCanal = data;
    });
  }
}

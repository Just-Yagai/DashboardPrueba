import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  ambienteID: number;
  canalID: number;

  constructor() {
    this.e_CF = false;
  }

  ngOnInit() {}
}

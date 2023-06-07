import { Component, Input, OnInit } from '@angular/core';
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
  // Ambientes: any[] = [];
  Ambientes: RespAmbiente[] = [];
  Canal: RespCanal[] = [];

  constructor(private getAmbienteService: AmbienteService,
    private getCanalService: CanalService) {
    this.e_CF = false;
  }

  ngOnInit() {
    this.obtenerAmbiente();
    this.obtenerCanal();
  }

  // obtenerAmbiente(){
  //   this.getAmbienteService.getAmbiente().subscribe((data: ResponseAmbiente[]) => {
  //     this.ambientes = data;
  //   });
  // }

  obtenerAmbiente(){
    this.getAmbienteService.getAmbiente()
        .subscribe((data: RespAmbiente[]) => {
          this.Ambientes = data;
        });
  }

  // obtenerAmbiente() {
  //   this.getAmbienteService.getAmbiente()
  //       .subscribe(data => {
  //         this.Ambientes = data;
  //         console.log(data);
  //       });
  // }

  obtenerCanal() {
    this.getCanalService.getCanal()
    .subscribe((data: RespCanal[]) => {
      this.Canal = data;
      console.log(data);
    });
  }
}

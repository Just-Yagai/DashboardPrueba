import { Component, Input, OnInit } from '@angular/core';
import { MarcasService } from './marcas.service';
import { RespMarca } from 'src/app/core/interface/marca.interface';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  dataMarcas: any = [];
  // marcas: any[] = [];

  // Marcas: RespMarca[] = [];
  
  constructor( private getMarcasServices: MarcasService){}

  ngOnInit() {
    this.obtenerMarcas();
    this.obtenerPorID();
    this.obtenerPorRNC();
  }

  obtenerPorRNC(){
    const rnc = '001';
    this.getMarcasServices.getMarcasPorRNC(rnc)
        .subscribe((data: RespMarca[]) => {
          console.log(data);
        });
  }

  obtenerPorID(){
    const ambienteID = 1;
    const canalID = 2;
    const rnc = '001';
    this.getMarcasServices.getMarcasPorID(ambienteID, canalID, rnc)
        .subscribe((data: RespMarca[]) => {
          console.log(data);
      });
  }

  obtenerMarcas(){
    this.getMarcasServices.getMarcas()
        .subscribe((data: RespMarca[]) => {
          this.dataMarcas = data;
          console.log(data);
        });
  }
}

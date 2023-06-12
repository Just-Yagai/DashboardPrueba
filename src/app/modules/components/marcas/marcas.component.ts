import { Component, Input, OnInit } from '@angular/core';
import { MarcasService } from './marcas.service';
import { RespMarca } from 'src/app/core/interface/marca.interface';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  // dataMarcas: any = [];

  @Input() dataMarcas: any[];

  constructor( private getMarcasServices: MarcasService){}

  ngOnInit() {}

  cambiarEstado(marca: any) {
    if (marca.estado === 'Disponible') {
      marca.estado = 'No disponible';
    } else {
      marca.estado = 'Disponible';
    }

    this.getMarcasServices.actualizarMarca(marca)
      .subscribe(resp => {
        console.log(resp);
      });
  }

  // obtenerPorRNC(){
  //   const rnc = '001';
  //   this.getMarcasServices.getMarcasPorRNC(rnc)
  //       .subscribe((data: RespMarca[]) => {
  //       });
  // }

  // obtenerPorID(){
  //   const ambienteID = 1;
  //   const canalID = 2;
  //   const rnc = '001';
  //   this.getMarcasServices.getMarcasPorID(ambienteID, canalID, rnc)
  //       .subscribe((data: RespMarca[]) => {
  //     });
  // }

  // obtenerMarcas(){
  //   this.getMarcasServices.getMarcas()
  //       .subscribe((data: RespMarca[]) => {
  //         this.dataMarcas = data;
  //       });
  // }
}

import { Component, Input, OnInit } from '@angular/core';
import { MarcasService } from '../../../services/marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

 public dataMarcas2: any[];

  @Input() dataMarcas: any[];

  constructor( private getMarcasServices: MarcasService){}

  ngOnInit() {
    // this.obtenerM();
  }

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

  // obtenerM(){
  //   this.getMarcasServices.getMarcas()
  //       .subscribe(resp => {
  //         this.dataMarcas2 = resp;
  //         console.log(resp);
  //       });
  // }

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

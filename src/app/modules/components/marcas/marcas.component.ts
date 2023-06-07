import { Component, Input, OnInit } from '@angular/core';
import { MarcasService } from './marcas.service';
import { RespMarca } from 'src/app/core/interface/marca.interface';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  Marcas: RespMarca[] = [];
  
  constructor( private getMarcasServices: MarcasService){}

  ngOnInit(){
    // this.obtenerMarcas();
  }

  // obtenerMarcas(){
  //   this.getMarcasServices.getMarcas()
  //       .subscribe((data) => {
  //         this.Marcas = data;
  //         console.log(data);
  //       });
  // }
}

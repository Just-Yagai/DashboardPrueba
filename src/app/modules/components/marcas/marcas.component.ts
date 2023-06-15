import { Component, Input, OnInit } from '@angular/core';
import { MarcasService } from '../../../services/marcas.service';
import { ModelsGeneral } from 'src/app/core';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  @Input() Marcas: any[];

  constructor(private getMarcasServices: MarcasService){}

  ngOnInit() {
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
}

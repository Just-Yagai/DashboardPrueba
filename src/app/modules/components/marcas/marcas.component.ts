import { Component, OnInit } from '@angular/core';
import { MarcasService } from './marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  public Marcas: any = [];
  
  constructor( private getServices: MarcasService){}

  ngOnInit(){}

  getMarcas(){}
}

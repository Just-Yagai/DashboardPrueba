import { Component, Input, OnInit } from '@angular/core';
import { AmbienteService } from './services/ambiente.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  public Select: any = [];
  
  @Input() e_CF: boolean;

  constructor(private services: AmbienteService){
    this.e_CF = false;
  }

  ngOnInit(){
    this.cargarData();
  }

  cargarData(){
    this.services.getAmbiente()
        .subscribe( resp => {
          this.Select = resp;
          console.log(this.Select);
          // console.log(resp);
        })
  }
}

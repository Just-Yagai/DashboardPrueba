import { Component, Input, OnInit } from '@angular/core';
import { AmbienteService } from './services/ambiente.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() e_CF: boolean;

  ambiente: any;

  constructor(private services: AmbienteService){
    this.e_CF = false;
  }

  ngOnInit(){
    this.services.getAmbiente().subscribe((data) => {
      this.ambiente = data;
      console.log(data);
    });
  }
}

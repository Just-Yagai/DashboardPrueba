import { Component, Input, OnInit } from '@angular/core';
import { SelectService } from './select.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() selectedTipoCertificacion!: string;

  public datas: any = [];
  @Input() e_CF: boolean;

  rnc!: string;
  ambiente: any = [];
  canal: any = [];
  isSelectDisabled: boolean = true;

  constructor( private GetServiceSelect: SelectService){
    this.e_CF = false;
  }

  ngOnInit(){}

  getSelect(){
    this.GetServiceSelect.getDataSelect(this.selectedTipoCertificacion).subscribe(data => {
      if (data) {
        this.ambiente = data.produccion;
        this.ambiente = data.preCertificacion;
        this.ambiente = data.certificacion;
        this.canal = data.b2b;
        this.canal = data.b2c;
        this.isSelectDisabled = false; 
      } else {
        this.ambiente = [];
        this.canal = [];
        this.isSelectDisabled = true; 
      }
    })
  }
}

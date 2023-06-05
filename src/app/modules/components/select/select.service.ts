import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor( private http: HttpClient ) { }
  
  getDataSelect(selectedTipoCertificacion: string): Observable<any> {
    return this.http.get<any>("assets/data/selectData.json").pipe(
      map(data => data.find((item: { tipo: string; }) => item.tipo === selectedTipoCertificacion))
    );
  }
}

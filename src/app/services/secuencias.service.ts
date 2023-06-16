import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecuenciasService {

  constructor( private http: HttpClient) { }

  getSecuencias(rnc: string, ambienteID: number, canalID: number): Observable<any> {
    return this.http.get<any>('assets/data/secuencias.json').pipe(
      map(data => data.filter((item: { rnc: string; ambienteID: number; canalID: number}) => item.rnc === rnc &&
      item.ambienteID === ambienteID &&
      item.canalID === canalID))
    );
  }

}

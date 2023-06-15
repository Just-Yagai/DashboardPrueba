import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
// import { MarcasModels, ResponseMarcas } from '../core';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http: HttpClient) { }

  getMarcas(rnc: string, ambienteID: number, canalID: number): Observable<any> {
    return this.http.get<any>('assets/data/marcas.json').pipe(
      map(data => data.filter((item: { rnc: string; ambienteID: number; canalID: number}) => item.rnc === rnc &&
      item.ambienteID === ambienteID &&
      item.canalID === canalID))
    );
  }

  // getMarcas(rnc: string): Observable<any> {
  //   return this.http.get<any>('assets/data/marcas.json').pipe(
  //     map(data => data.filter((item: { rnc: string; }) => item.rnc === rnc ))
  //   );
  // }

  actualizarMarca(marca: any): Observable<any> {
    const url = 'assets/json/marcas.json';
    return this.http.put(url, marca);
  }
} 

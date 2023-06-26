import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, filter, map } from 'rxjs';
import { Employee } from '../shared/Employee';
import { ModelsGeneral } from '../core';
import { retry } from 'rxjs/operators';
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
    const url = 'assets/data/marcas.json';
    return this.http.put(url, marca);
  }

  // getMarcasSelect(): Observable<any> {
  //   return this.http.get<any>('assets/data/marcas.json');
  // }

  getMarcasSelect(rnc: string): Observable<any> {
    return this.http.get<any>('assets/data/marcas.json').pipe(
      map(data => data.filter((item: { rnc: string; }) => item.rnc === rnc ))
    );
  }

  // getMarcasSelect(rnc: string, ambienteID: number, canalID: number): Observable<any> {
  //   return this.http.get<any>('assets/data/marcas.json').pipe(
  //     map(data => data.filter((item: { rnc: string; ambienteID: number; canalID: number}) => item.rnc === rnc &&
  //     item.ambienteID === ambienteID &&
  //     item.canalID === canalID))
  //   );
  // }

} 

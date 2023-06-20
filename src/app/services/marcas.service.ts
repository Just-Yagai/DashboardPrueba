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
  apiURL: any;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

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

  update(rnc: any, employee: any): Observable<Employee>{
    const apiURL = 'assets/data/marcas.json';
    return this.http
      .put<Employee>(
        this.apiURL + rnc,
        JSON.stringify(employee),
        this.httpOptions
      )
  }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>('assets/data/datos.json');
  }

  obtenerDatos2() {
    return this.http.get('assets/data/datos.json');
  }

  getMarcasSelect(): Observable<any> {
    return this.http.get<any>('assets/data/marcas.json');
  }

} 

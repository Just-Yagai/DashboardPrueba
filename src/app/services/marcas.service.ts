import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
// import { MarcasModels, ResponseMarcas } from '../core';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  public data: any[];

  constructor(private http: HttpClient) { }

  // getMarcas(): Observable<any> {
  //   return this.http.get<ResponseMarcas>('assets/data/marcas.json');
  // }

  // getMarcas(AmbienteID: number, canalID: number): Observable<any> {
  //   return this.http.get<ResponseMarcas>('assets/data/marcas.json')
  //               .pipe(
  //                 map( resp => {
  //                   return resp.DataMarcas.filter( data => {
  //                     return new MarcasModels
  //                     ( 
  //                       data.rnc, 
  //                       data.tipo, 
  //                       data.estado, 
  //                       data.fecha_inicio_operacion, 
  //                       data.AmbienteID, 
  //                       data.CanalID
  //                     )
  //                   })
  //                 })
  //               )
  // }

  // getMarcas() {
  //   return this.http.get<ResponseMarcas>('assets/data/marcas.json')
  //               .pipe(
  //                 map( resp => {
  //                   return resp.DataMarcas;
  //                 })
  //               )
  // }

  actualizarMarca(marca: any): Observable<any> {
    const url = 'assets/json/marcas.json';
    return this.http.put(url, marca);
  }

  getMarcasPorID(ambienteID: number, canalID: number, rnc: string): Observable<any[]> {
    return this.http.get<any[]>('assets/data/marcas.json').pipe(
      map(marcas => marcas.filter(marca => marca.AmbienteID === ambienteID && marca.CanalID === canalID && marca.rnc === rnc))
    );
  }

  getMarcasPorRNC(rnc: string): Observable<any[]> {
    return this.http.get<any[]>('assets/data/marcas.json').pipe(
      map(marcas => marcas.filter(marca => marca.rnc === rnc))
    );
  }
} 

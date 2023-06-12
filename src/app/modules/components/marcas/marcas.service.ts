import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  private marcas: any[] = [];

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<any> {
    return this.http.get('assets/data/marcas.json');
  }

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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ModelsGeneral } from '../core';


@Injectable({
  providedIn: 'root'
})
export class DelegacionesService {

  constructor( private http: HttpClient) { }

  getDelegaciones(rnc: string, ambienteID: number, canalID: number): Observable<ModelsGeneral[]> {
    return this.http.get<ModelsGeneral[]>('assets/data/delegaciones.json').pipe(
      map(data =>
        data.filter(marca =>
          marca.rnc === rnc &&
          marca.AmbienteID === ambienteID &&
          marca.CanalID === canalID
        )
      )
    );
  }

  getDelegacionesSelect(rnc: string): Observable<any> {
    return this.http.get<any>('assets/data/delegaciones.json').pipe(
      map(data => data.filter((item: { rnc: string; }) => item.rnc === rnc ))
    );
  }


  // getDelegaciones(): Observable<any> {
  //   return this.http.get('assets/data/delegaciones.json');
  // }
}

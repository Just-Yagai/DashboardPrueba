import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DelegacionesService {

  constructor( private http: HttpClient) { }

  getDelegaciones(rnc: string, ambienteID: number, canalID: number): Observable<any> {
    return this.http.get<any>('assets/data/delegaciones.json').pipe(
      map(data => data.filter((item: { rnc: string; ambienteID: number; canalID: number }) => item.rnc === rnc && item.ambienteID === ambienteID && item.canalID === canalID))
    );
  }

  getDelegacionesSelect(): Observable<any> {
    return this.http.get<any>('assets/data/delegaciones.json');
  }

  // getDelegaciones(): Observable<any> {
  //   return this.http.get('assets/data/delegaciones.json');
  // }
}

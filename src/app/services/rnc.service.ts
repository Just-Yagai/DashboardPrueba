import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ModelsGeneral } from '../core';

@Injectable({
  providedIn: 'root'
})
export class RncService {

  constructor(private http: HttpClient) { }

  getRncEstado(rnc: string, ambienteID: number, canalID: number): Observable<any> {
    return this.http.get<any>('assets/data/rncEstado.json')
      .pipe(
        map(data => data.filter((item: {
          rnc: string;
          ambienteID: number;
          canalID: number;
        }) =>
          item.rnc === rnc &&
          item.ambienteID === ambienteID &&
          item.canalID === canalID
        ))
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { AmbienteService } from '../select/services/ambiente.service';
import { RespMarca } from 'src/app/core/interface/marca.interface';


@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http: HttpClient,
              private ambienteService: AmbienteService) { }
    
  // getMarcas(rnc: string, AmbienteID: number): Observable<any> {
  //   return this.http.get<any>('assets/data/ambiente.json').pipe(
  //     map(data => {
  //       const filteredData = data.filter((item: { rnc: string; AmbienteID: number; CanalID: number; }) =>
  //         item.rnc === rnc && item.AmbienteID === AmbienteID);
  //       return filteredData;
  //     })
  //   );
  // }
} 

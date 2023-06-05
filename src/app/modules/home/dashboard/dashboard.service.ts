import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // private datosURL = 'assets/data/datos.json'

  constructor( private http: HttpClient ) { }
  
  getRNC(rnc: string): Observable<any> {
    return this.http.get<any>("assets/data/datos.json").pipe(
      map(data => data.find((item: { rnc: string; }) => item.rnc === rnc))
    );
  }
}

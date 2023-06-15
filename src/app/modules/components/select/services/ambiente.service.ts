import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  constructor(private http: HttpClient) { }

  // getAmbiente(): Observable<any> {
  //   return this.http.get('assets/data/ambiente.json');
  // }

  getAmbiente(id: number): Observable<any> {
    return this.http.get<any>('assets/data/ambiente.json').pipe(
      map(data => data.filter((item: { id: number; }) => item.id === id))
    )
  }
}

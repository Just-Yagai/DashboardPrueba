import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  constructor(private http: HttpClient) { }

  // getCanal(): Observable<any>{
  //   return this.http.get('assets/data/canal.json');
  // }

  getCanal(id: number): Observable<any> {
    return this.http.get<any>('assets/data/canal.json').pipe(
      map(data => data.filter((item: { id: number; }) => item.id === id))
    )
  }
}

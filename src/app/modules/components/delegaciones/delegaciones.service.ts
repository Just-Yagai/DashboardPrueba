import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DelegacionesService {

  constructor( private http: HttpClient) { }

  getDelegaciones(): Observable<any> {
    return this.http.get('assets/data/delegaciones.json');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  constructor(private http: HttpClient) { }

  getAmbiente(): Observable<any>{
    return this.http.get('assets/data/ambiente.json');
  }
}

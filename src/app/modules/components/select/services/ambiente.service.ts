import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  constructor(private http: HttpClient) { }

  getAmbiente(){
    const ambienteURL = 'assets/data/ambiente.json';
    return this.http.get(ambienteURL);
  }
}

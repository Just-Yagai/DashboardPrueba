import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  constructor(private http: HttpClient) { }

  getCanal(): Observable<any>{
    return this.http.get('assets/data/canal.json');
  }
}

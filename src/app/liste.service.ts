import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liste } from './liste/liste';


@Injectable({
  providedIn: 'root'
})
export class ListeService {
  private _listeUrl = "http://localhost:8000/api/listeP";
  constructor(private http: HttpClient) { }

getListe():Observable<Liste[]> {
  return this.http.get<Liste[]>(this._listeUrl);
}



}

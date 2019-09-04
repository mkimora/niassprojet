import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Liste } from './liste/liste';


@Injectable({
  providedIn: 'root'
})
export class ListeService {
  
  private _listeUrl = "http://localhost:8000/api/listeP";
  constructor(private http: HttpClient) { }

getListe():Observable<Liste[]> {

  var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  return this.http.get<Liste[]>(this._listeUrl , {headers:headers});
}



}

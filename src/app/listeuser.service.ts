import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listeu } from './listeu';

@Injectable({
  providedIn: 'root'
})
export class ListeuserService {
private _listeuUrl = "http://localhost:8000/api/listeU";

  constructor(private http : HttpClient) { }

  getListe():Observable<Listeu[]> {
    var headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<Listeu[]>(this._listeuUrl ,  {headers:headers})
  }
}


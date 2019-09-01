import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listeu } from './listeu';

@Injectable({
  providedIn: 'root'
})
export class ListeuserService {
private _listeuUrl = "http://localhost:8000/api/listeU";

  constructor(private http : HttpClient) { }

  getListe():Observable<Listeu[]> {
    return this.http.get<Listeu[]>(this._listeuUrl)
  }
}

